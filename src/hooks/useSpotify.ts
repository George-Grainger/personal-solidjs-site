import { createResource, createSignal, ResourceFetcher, ResourceFetcherInfo } from 'solid-js';
import { CurrentlyPlaying, Episode, Track } from 'spotify-types';
import useLocalStorage from './useLocalStorage';

export interface TopTrack {
  title: string;
  creator: string;
  imgUrl: string;
  playUrl: string;
  previewUrl?: string;
}

export interface LastPlayedMedia extends TopTrack {
  isPlaying: boolean;
  duration: number;
  progressMs: number;
  playedAt: string;
}

// Set global so the incrementing of time carries on between pages and interval doesn't double enter
const [playerProgress, setPlayerProgress] = createSignal(0);
let lastInterval: number | undefined;

export const useSpotify = () => {
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=9`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const ONE_DAY = 86400000;
  const THIRTY_SECONDS = 30000;
  const FIVE_MINUTES = 300000;

  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
  const basic = btoa(`${client_id}:${client_secret}`);

  const triggerProgressIncrement = (providedProgress: number = 0, duration: number = 0) => {
    if (providedProgress <= playerProgress() || providedProgress >= duration) {
      return;
    }
    setPlayerProgress(providedProgress);
    lastInterval && clearInterval(lastInterval);
    lastInterval = setInterval(() => {
      if (playerProgress() < duration) {
        setPlayerProgress((val) => Math.min(val + 1000, duration));
      } else {
        clearInterval(lastInterval);
        setPlayerProgress(0);
        refetchMostRecentMedia();
      }
    }, 1000);
  };

  const filterTrackData = (tracks: Track[]) => {
    return tracks.map((track) => ({
      title: track.name,
      creator: track.artists.map((_artist) => _artist.name).join(', '),
      imgUrl: track.album.images[0].url,
      playUrl: track.external_urls.spotify,
      previewUrl: track.preview_url,
    }));
  };

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      }).toString(),
    });

    return response.json();
  };

  const requestNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const expiresAt = Date.now() + THIRTY_SECONDS;

    if (response.status === 204 || response.status > 400) {
      return { expiresAt, track: { isPlaying: false } };
    }

    const nowPlaying: CurrentlyPlaying = await response.json();

    if (nowPlaying.item === null || nowPlaying.currently_playing_type !== 'track') {
      return { expiresAt, track: { isPlaying: false } };
    }

    setPlayerProgress(0);

    const baseTrack = filterTrackData([nowPlaying.item as Track])[0];
    const track: LastPlayedMedia = {
      ...baseTrack,
      isPlaying: nowPlaying.is_playing,
      duration: nowPlaying.item.duration_ms,
      progressMs: nowPlaying.progress_ms || 0,
      playedAt: new Date().toISOString(),
    };

    return { expiresAt, track };
  };

  const requestRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const expiresAt = Date.now() + FIVE_MINUTES;
    const { items }: { items: { track: Track; played_at: string }[] } = await response.json();
    const baseTrack = filterTrackData([items[0].track])[0];

    const track = {
      ...baseTrack,
      isPlaying: false,
      duration: 0,
      progressMs: 0,
      playedAt: items[0].played_at,
    };

    return { expiresAt, track };
  };

  const requestTopTracks = async () => {
    const { access_token } = await getAccessToken();

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const expiresAt = Date.now() + ONE_DAY;
    const { items }: { items: Track[] } = await response.json();
    const tracks = filterTrackData(items);

    return { expiresAt, tracks };
  };

  const getMostRecent = async (_: boolean, { refetching }: ResourceFetcherInfo<LastPlayedMedia | undefined>) => {
    // Use local storage to act as cache to prevent needless api calls
    const [getCurrentSong, setCurrentSong] = useLocalStorage<{ expiresAt: number; track: LastPlayedMedia } | null>('most-recent', null);
    const expiry = getCurrentSong()?.expiresAt;

    if (expiry && expiry > Date.now() && !refetching) {
      const track = getCurrentSong()?.track;
      triggerProgressIncrement(track?.progressMs, track?.duration);
      return track;
    }

    // If currently playing show that song, otherwise return the most recently played song
    const [recentlyPlayed, nowPlaying] = await Promise.all([requestRecentlyPlayed(), requestNowPlaying()]);
    const media = (nowPlaying.track.isPlaying ? nowPlaying : recentlyPlayed) as unknown as {
      expiresAt: number;
      track: LastPlayedMedia;
    };

    setCurrentSong(media);
    triggerProgressIncrement(media.track.progressMs, media.track.duration);
    return media.track;
  };

  const getTopTracks = async () => {
    // Use local storage to act as cache to prevent needless api calls
    const [getTopTracks, setTopTracks] = useLocalStorage<{ expiresAt: number; tracks: TopTrack[] } | null>('top-tracks', null);
    const expiry = getTopTracks()?.expiresAt;
    if (expiry && expiry > Date.now()) {
      return getTopTracks()?.tracks;
    }

    const topTracks = await requestTopTracks();
    setTopTracks(topTracks);
    return topTracks.tracks;
  };

  const [mostRecentMedia, { refetch: refetchMostRecentMedia }] = createResource(getMostRecent);

  const [topSongs, { refetch: refetchTopSongs }] = createResource(getTopTracks);
  return { mostRecentMedia, refetchMostRecentMedia, topSongs, refetchTopSongs, playerProgress };
};

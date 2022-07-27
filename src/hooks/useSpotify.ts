import { createResource } from 'solid-js';
import { CurrentlyPlaying, Episode, Track } from 'spotify-types';
import useLocalStorage from './useLocalStorage';

interface NotPlaying {
  expiresAt: number;
  isPlaying: Boolean;
}

interface NowPlayingGeneric extends NotPlaying {
  playingUrl: string;
  title: string;
  creator: string;
  imgUrl: string;
}

export interface NowPlayingTrack extends NowPlayingGeneric {
  type: 'track';
  album: string;
}

export interface NowPlayingShow extends NowPlayingGeneric {
  type: 'show';
  description: string;
}

export interface TopTrack {
  artist: string;
  previewUrl: string;
  songUrl: string;
  title: string;
  albumImageUrl: string;
}

export const useSpotify = () => {
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const ONE_DAY = 86400000;
  const TWO_MINS = 120000;

  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
  const basic = btoa(`${client_id}:${client_secret}`);

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

    const expiresAt = Date.now() + TWO_MINS;

    if (response.status === 204 || response.status > 400) {
      return { expiresAt, isPlaying: false };
    }

    const nowPlaying: CurrentlyPlaying = await response.json();

    if (nowPlaying.item === null) {
      return { expiresAt, isPlaying: false };
    }

    const type = nowPlaying.item.hasOwnProperty('show') ? 'show' : 'track';
    const isPlaying = nowPlaying.is_playing;
    const title = nowPlaying.item.name;
    const playingUrl = nowPlaying.item.external_urls.spotify;

    if (type === 'show') {
      // Playing a show (e.g. a podcast)
      const description = (nowPlaying.item as Episode).description;
      const show = (nowPlaying.item as Episode).show.name;
      const showImageUrl = (nowPlaying.item as Episode).show.images[0].url;
      return {
        expiresAt,
        type,
        isPlaying,
        playingUrl,
        title,
        description,
        show,
        showImageUrl,
      };
    }

    // Must be playing a song
    const artist = (nowPlaying.item as Track).artists.map((_artist) => _artist.name).join(', ');
    const album = (nowPlaying.item as Track).album.name;
    const albumImageUrl = (nowPlaying.item as Track).album.images[0].url;
    return {
      expiresAt,
      type,
      isPlaying,
      playingUrl,
      title,
      album,
      albumImageUrl,
      artist,
    };
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

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      previewUrl: track.preview_url,
      songUrl: track.external_urls.spotify,
      title: track.name,
      albumImageUrl: track.album.images[0].url,
    }));

    return { expiresAt, tracks };
  };

  const getNowPlaying = async () => {
    // Use local storage to act as cache to prevent needless api calls
    const [getCurrentSong, setCurrentSong] = useLocalStorage<NowPlayingShow | NowPlayingTrack | NotPlaying | null>('now-playing', null);
    const expiry = getCurrentSong()?.expiresAt;

    if (expiry && expiry > Date.now()) {
      return getCurrentSong();
    }

    const nowPlaying = requestNowPlaying();
    setCurrentSong(await nowPlaying);
    return nowPlaying;
  };

  const getTopTracks = async () => {
    // Use local storage to act as cache to prevent needless api calls
    const [getTopTracks, setTopTracks] = useLocalStorage<{ expiresAt: number; tracks: TopTrack[] } | null>('top-tracks', null);
    const expiry = getTopTracks()?.expiresAt;
    if (expiry && expiry > Date.now()) {
      return getTopTracks();
    }

    const topTracks = requestTopTracks();
    setTopTracks(await topTracks);
    return topTracks;
  };

  const [currentSong, { refetch: refetchCurrentSong }] = createResource(getNowPlaying);
  const [topSongs, { refetch: refetchTopSongs }] = createResource(getTopTracks);
  return { currentSong, refetchCurrentSong, topSongs, refetchTopSongs };
};

import recentlyPlayed from '../api-backup/recently-played';
import topTracks from '../api-backup/top-tracks';

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

// Use of spotify is deprecated on this version of the site - you can see the legacy implmentation in useSpotifyLegacy
export const useSpotify = () => {
  const mostRecentMedia = () => recentlyPlayed;
  const topSongs = () => topTracks;
  const playerProgress = () => 0;

  return { mostRecentMedia, topSongs, playerProgress };
};

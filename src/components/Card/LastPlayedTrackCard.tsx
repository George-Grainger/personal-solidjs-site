import { Show, VoidComponent } from 'solid-js';
import { LastPlayedMedia, useSpotify } from '../../hooks/useSpotify';
import { Audio } from './Audio';
import styles from './Card.module.css';
import { SpotifyLogo } from './Logos';

const WhenNotPlaying: VoidComponent<{ playedAt: string }> = ({ playedAt }) => {
  return (
    <>
      <p class={styles.playedAt}>
        Played on {new Date(playedAt || 0).toLocaleDateString()} at {new Date(playedAt || 0).toLocaleTimeString().slice(0, -3)}
      </p>
      <p>Check again when I'm playing for a live feed</p>
    </>
  );
};

const WhenPlaying: VoidComponent<{ duration: number }> = ({ duration }) => {
  const { playerProgress } = useSpotify();
  const getPercentage = () => 100 * (playerProgress() / duration) - 100;

  return (
    <>
      <p class={styles.currentlyPlaying}>Currently playing at...</p>
      <div class={styles.progressArea}>
        <p>{new Date().millisToISOTime(playerProgress())}</p>
        <div style={{ '--translate': `${getPercentage()}%` }} class={styles.progressBar}></div>
        <p>{new Date().millisToISOTime(duration)}</p>
      </div>
      <p>Stick around to see what I listen to next</p>
    </>
  );
};

export const LastPlayedMediaCard: VoidComponent<LastPlayedMedia> = (props) => {
  return (
    <div class={styles.lastPlayedCard}>
      <strong class={styles.heading}>Lastest song played</strong>
      <a class={styles.spotifyLink} href={props.playUrl} target="_blank" rel="noopener noreferrer">
        <SpotifyLogo class={styles.spotifySvg} />
      </a>
      <img src={props.imgUrl} alt={`Album image for ${props.title}`} loading="lazy" />
      <div class={styles.details}>
        <p class={styles.songTitle}>{props.title}</p>
        <strong class={styles.artist}>{props.creator}</strong>
        <Show when={props.isPlaying} fallback={props.playedAt && <WhenNotPlaying playedAt={props.playedAt} />}>
          <WhenPlaying duration={props.duration} />
        </Show>
      </div>
      <Show when={props.previewUrl}>
        <Audio src={props.previewUrl} />
      </Show>
    </div>
  );
};

import { createSignal, Show, VoidComponent } from 'solid-js';
import { TopTrack } from '../../hooks/useSpotify';
import { Audio } from './Audio';
import styles from './Card.module.css';
import { SpotifyLogo } from './Logos';

const [autoPlay, setAutoPlay] = createSignal(false);

// Not having browser support to style the HTML audio is such a pain
export const TopTrackCard: VoidComponent<TopTrack> = (props) => {
  let parent: HTMLDivElement | undefined;
  const audioId = props.title
    .toLowerCase()
    .replaceAll(/[(),.'"%$&#!\\\/]/g, '')
    .replaceAll(' ', '-');

  const handleClose = () => {
    const nextCard = parent?.querySelector(`#${audioId} ~ * button:last-of-type`) as HTMLButtonElement | null;
    nextCard?.focus();
    nextCard?.blur();
  };

  return (
    <div ref={parent} class={styles.topTrackCard} tabindex={0} role="gridcell">
      <img src={props.imgUrl} alt={`Album image for ${props.title}`} loading="lazy" />
      <svg tabindex={0} class={styles.closeButton} onClick={handleClose} role="button" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
      <div class={styles.topTrackdetails}>
        <p class={styles.songTitle}>{props.title}</p>
        <a class={styles.spotifyLink} href={props.playUrl} target="_blank" rel="noopener noreferrer">
          <span class="sr-only">{`Listen to ${props.title} on Spotify`}</span>
          <SpotifyLogo />
        </a>
        <strong class={styles.artist}>{props.creator}</strong>
        <Show when={props.previewUrl}>
          <Audio
            src={props.previewUrl}
            id={audioId}
            parentOptions={{ parentRef: parent, setAutoPlay, playOnFocus: autoPlay, fadeOutOnFocusOut: () => true }}
          />
        </Show>
      </div>
    </div>
  );
};

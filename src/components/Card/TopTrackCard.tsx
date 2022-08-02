import { createSignal, Show, VoidComponent } from 'solid-js';
import { TopTrack } from '../../hooks/useSpotify';
import { Audio } from './Audio';
import styles from './Card.module.css';
import { SpotifyLogo } from './Logos';

const [autoPlay, setAutoPlay] = createSignal(true);

// Not having browser support to style the HTML audio is such a pain
export const TopTrackCard: VoidComponent<TopTrack> = (props) => {
  let parent: HTMLDivElement | undefined;

  return (
    <div ref={parent} class={styles.topTrackCard} tabindex={0} role="gridcell">
      <img src={props.imgUrl} alt={`Album image for ${props.title}`} loading="lazy" />
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
            id={props.title
              .toLowerCase()
              .replaceAll(/[(),.'"%$!\\\/]/g, '')
              .replaceAll(' ', '-')}
            parentOptions={{ parentRef: parent, setAutoPlay, playOnFocus: autoPlay, fadeOutOnFocusOut: () => true }}
          />
        </Show>
      </div>
    </div>
  );
};

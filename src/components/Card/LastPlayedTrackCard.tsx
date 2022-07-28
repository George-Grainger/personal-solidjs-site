import { Show, VoidComponent } from 'solid-js';
import { LastPlayedMedia, useSpotify } from '../../hooks/useSpotify';
import { Audio } from './Audio';
import styles from './Card.module.css';

export const LastPlayedMediaCard: VoidComponent<LastPlayedMedia> = (props) => {
  const { playerProgress } = useSpotify();

  return (
    <div class={styles.lastPlayedCard}>
      <img src={props.imgUrl} alt={`Album image for ${props.title}`} />
      <strong>
        <Show when={props.isPlaying} fallback={'Lastest song played'}>
          Playing now!!!
        </Show>
      </strong>
      <p class={styles.songTitle}>{props.title}</p>
      <strong class={styles.artist}>{props.creator}</strong>
      <Show when={props.isPlaying} fallback={<p>Nothing to show</p>}>
        {new Date().millisToISOTime(playerProgress())} {new Date().millisToISOTime(props.duration)}
      </Show>
      <Audio src={props.previewUrl} />
    </div>
  );
};

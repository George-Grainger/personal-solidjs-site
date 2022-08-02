import { useI18n } from '@solid-primitives/i18n';
import { Show, VoidComponent } from 'solid-js';
import { LastPlayedMedia, useSpotify } from '../../hooks/useSpotify';
import { Audio } from './Audio';
import styles from './Card.module.css';
import { SpotifyLogo } from './Logos';

const WhenNotPlaying: VoidComponent<{ playedAt: string }> = ({ playedAt }) => {
  const [t] = useI18n();
  return (
    <>
      <p class={styles.playedAt}>
        {t(
          'home.played-on',
          {
            date: new Date(playedAt || 0).toLocaleDateString(),
            time: new Date(playedAt || 0).toLocaleTimeString().slice(0, -3),
          },
          'Played on {{date}} at {{time}}',
        )}
      </p>
      <p>{t('home.check-back', {}, "Check back when I'm listening for a live feed")}</p>
    </>
  );
};

const WhenPlaying: VoidComponent<{ duration: number }> = ({ duration }) => {
  const [t] = useI18n();
  const { playerProgress } = useSpotify();
  const getPercentage = () => 100 * (playerProgress() / duration);

  return (
    <>
      <p class={styles.currentlyPlaying}>{t('home.current-playing', {}, "I'm currently listening at...")}</p>
      <div class={styles.progressArea}>
        <p>{new Date().millisToISOTime(playerProgress())}</p>
        <progress aria-label="Song progress" class={styles.progressBar} max={100} value={getPercentage()}></progress>
        <p>{new Date().millisToISOTime(duration)}</p>
      </div>
      <p>{t('home.stick-around', {}, 'Stick around to see what I listen to next')}</p>
    </>
  );
};

export const LastPlayedMediaCard: VoidComponent<LastPlayedMedia> = (props) => {
  const [t] = useI18n();

  return (
    <div class={styles.lastPlayedCard}>
      <strong class={styles.heading}>{t('home.latest-song', {}, 'Latest song played')}</strong>
      <a class={styles.spotifyLink} href={props.playUrl} target="_blank" rel="noopener noreferrer">
        <span class="sr-only">{`Listen to ${props.title} on Spotify`}</span>
        <SpotifyLogo class={styles.spotifySvg} />
      </a>
      <img src={props.imgUrl} alt={t('home.album-img-alt', { title: props.title })} loading="lazy" />
      <div class={styles.details}>
        <p class={styles.songTitle}>{props.title}</p>
        <strong class={styles.artist}>{props.creator}</strong>
        <Show when={props.isPlaying} fallback={props.playedAt && <WhenNotPlaying playedAt={props.playedAt} />}>
          <WhenPlaying duration={props.duration} />
        </Show>
      </div>
      <Show when={props.previewUrl}>
        <Audio
          src={props.previewUrl}
          id={props.title
            .toLowerCase()
            .replaceAll(/[(),.'"%$!\\\/]/g, '')
            .replaceAll(' ', '-')}
        />
      </Show>
    </div>
  );
};

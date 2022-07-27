import { createEffect, createSignal, Show, VoidComponent } from 'solid-js';
import { TopTrack } from '../../hooks/useSpotify';
import styles from './Card.module.css';

const PlayIcon = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
    </svg>
  );
};

const PauseIcon = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"></path>
    </svg>
  );
};

const SoundIcon = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160"
      ></path>
      <path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z"></path>
    </svg>
  );
};

const MuteIcon = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></path>
      <path d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47 298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 01-.63 11.74l27.32 27.32A148.8 148.8 0 00352 256zm64 0c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64 16.12 8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256z"></path>
      <path d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49-27 17.22 8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256zM256 72l-73.6 58.78 73.6 73.59V72zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z"></path>
    </svg>
  );
};

const SpotifyLogo = () => {
  return (
    <svg viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 168c0 92 76 168 168 168s168-76 168-168a168 168 0 0 0-336 0Z" fill="#1DD75E" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M83 229c58-13 108-7 147 17 11 6 22-11 11-18-44-27-98-34-162-19-12 2-10 22 4 20Zm-3-48c53-16 122-8 167 20 14 9 28-13 14-22-52-32-127-41-188-23-16 4-10 30 7 25Zm-17-81c-19 7-8 36 9 30 51-16 141-13 195 19 18 10 34-18 17-27-62-37-162-40-221-22Z"
        fill="#000"
      />
    </svg>
  );
};

// Not having browser support to style the HTML audio is such a pain
export const SpotifyCard: VoidComponent<TopTrack> = (props) => {
  let audio: HTMLAudioElement | undefined;
  let timeline: HTMLInputElement | undefined;

  const [paused, setPaused] = createSignal(true);
  const [muted, setMuted] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal('0:00');
  const [totalTime, setTotalTime] = createSignal('0:00');

  const fadeVolumeOut = () => {
    if (!audio) {
      return;
    }
    // Create lock for single access at a time
    if (!fadeVolumeOut.isRunning) {
      fadeVolumeOut.isRunning = true;
    }
    if (audio.volume <= 0.0125) {
      fadeVolumeOut.isRunning = false;
      setPaused(true);
      audio.volume = 1;
    } else {
      audio.volume -= 0.0125;
      window.requestAnimationFrame(fadeVolumeOut);
    }
  };
  fadeVolumeOut.isRunning = false;

  createEffect(() => {
    paused() ? audio?.pause() : audio?.play();
  });

  createEffect(() => {
    if (audio) audio.muted = muted();
  });

  const toISOTime = (seconds?: number) => {
    const date = new Date(0);
    seconds && date.setSeconds(seconds);
    return date.toISOString().substring(15, 19);
  };

  const changeTimelinePosition = () => {
    if (audio && timeline) {
      const percentagePosition = (100 * audio.currentTime) / audio.duration || 0;
      updateBackground(percentagePosition);
      timeline.value = percentagePosition.toString();
      audio.duration - audio.currentTime < 1.5 && !fadeVolumeOut.isRunning && fadeVolumeOut();
    }
  };

  const updateBackground = (position: number) => {
    if (audio && timeline) {
      setCurrentTime(toISOTime(position * audio.duration * 0.01));
      timeline.style.backgroundSize = `${position}% 100%`;
    }
  };

  const changeSeek = () => {
    if (audio && timeline) {
      audio.currentTime = (parseFloat(timeline.value) * audio.duration) / 100;
    }
  };

  return (
    <div
      class={styles.spotifyCard}
      tabindex={0}
      onFocusOut={(e) => !e.currentTarget.parentElement?.matches(':focus-within') && fadeVolumeOut()}
    >
      <img src={props.albumImageUrl} alt={`Album image for ${props.title}`} />
      <div class={styles.spotifyDetails}>
        <p class={styles.songTitle}>{props.title}</p>
        <a class={styles.spotifyLink} href={props.songUrl} target="_blank" rel="noopener noreferrer">
          <SpotifyLogo />
        </a>
        <p class={styles.artist}>{props.artist}</p>

        <Show when={props.previewUrl !== null}>
          <audio
            ref={audio}
            onTimeUpdate={changeTimelinePosition}
            onLoadedData={() => setTotalTime(toISOTime(audio!.duration))}
            onEnded={() => setPaused(true)}
            preload="auto"
            src={props.previewUrl}
          />
          <div class={styles.controls}>
            <button onClick={() => setPaused(!paused())}>
              <Show when={paused()} fallback={<PauseIcon />}>
                <PlayIcon />
              </Show>
            </button>
            <div class={styles.timelineWrapper}>
              <span>{currentTime()}</span>
              <input
                ref={timeline}
                onChange={changeSeek}
                onKeyPress={(e) => e.key === ' ' && setPaused(!paused())}
                onInput={(e) => updateBackground(Number((e.target as HTMLInputElement).value))}
                type="range"
                class={styles.timeline}
                classList={{ playing: !paused() }}
                min={0}
                max={100}
                step={1}
                value={0}
              />
              <span>{totalTime()}</span>
            </div>
            <button onClick={() => setMuted(!muted())}>
              <Show when={muted()} fallback={<SoundIcon />}>
                <MuteIcon />
              </Show>
            </button>
          </div>
        </Show>
      </div>
    </div>
  );
};

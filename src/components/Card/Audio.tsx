import { Accessor, createEffect, createSignal, JSX, onCleanup, onMount, Setter, Show, splitProps, VoidComponent } from 'solid-js';
import styles from './Card.module.css';

const PlayIcon: VoidComponent<{}> = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <title>Play</title>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
    </svg>
  );
};

const PauseIcon: VoidComponent<{}> = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <title>Pause</title>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"></path>
    </svg>
  );
};

const SoundIcon: VoidComponent<{}> = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <title>Mute</title>
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

const MuteIcon: VoidComponent<{}> = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <title>Unmute</title>
      <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></path>
      <path d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47 298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 01-.63 11.74l27.32 27.32A148.8 148.8 0 00352 256zm64 0c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64 16.12 8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256z"></path>
      <path d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49-27 17.22 8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256zM256 72l-73.6 58.78 73.6 73.59V72zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z"></path>
    </svg>
  );
};

interface ParentEventOptions {
  parentRef?: HTMLElement;
  playOnFocus?: Accessor<boolean>;
  fadeOutOnFocusOut?: Accessor<boolean>;
  setAutoPlay?: Setter<boolean>;
}

type AudioProps = JSX.AudioHTMLAttributes<HTMLAudioElement> & { parentOptions?: ParentEventOptions; id: string | number };

export const Audio: VoidComponent<AudioProps> = (props) => {
  const [local, others] = splitProps(props, ['onTimeUpdate', 'onLoadedData', 'onEnded', 'parentOptions']);
  const parentRef = local.parentOptions?.parentRef;

  let audio: HTMLAudioElement | undefined;

  const [paused, setPaused] = createSignal(true);
  const [muted, setMuted] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [totalTime, setTotalTime] = createSignal(1);

  const getPercentage = (val = 0) => 100 * (val || currentTime() / totalTime());

  let animationFrameId: number | undefined;
  const fadeVolumeOut = () => {
    if (!audio) {
      return;
    }
    // Create lock for single access at a time
    if (!fadeVolumeOut.isRunning) {
      fadeVolumeOut.isRunning = true;
    }
    if (audio.volume === 0) {
      fadeVolumeOut.isRunning = false;
      setPaused(true);
      audio.volume = 1;
    } else {
      audio.volume = Math.max(audio.volume - 0.0125, 0);
      animationFrameId = window.requestAnimationFrame(fadeVolumeOut);
    }
  };
  fadeVolumeOut.isRunning = false;
  const fadeOut = () => !fadeVolumeOut.isRunning && fadeVolumeOut();

  if (parentRef) {
    createEffect(() => {
      const unPause = () => {
        setPaused(false);
        if (animationFrameId) {
          fadeVolumeOut.isRunning = false;
          window.cancelAnimationFrame(animationFrameId);
        }
        if (audio) audio.volume = 1;
      };
      if (local.parentOptions?.playOnFocus?.()) {
        parentRef?.addEventListener('focus', unPause);
      }
      onCleanup(() => parentRef?.removeEventListener('focus', unPause));
    });

    onMount(() => {
      if (local.parentOptions?.fadeOutOnFocusOut?.()) {
        parentRef?.addEventListener('focusout', (e: Event) => !parentRef?.matches(':focus-within') && fadeOut());
      }
      onCleanup(() => parentRef?.removeEventListener('onfocusout', fadeOut));
    });
  }

  createEffect(() => {
    if (audio) audio.muted = muted();
  });

  createEffect(() => {
    paused() ? audio?.pause() : audio?.play();
  });

  const updateBackground = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.style.backgroundSize = `${Number(target.value)}% 100%`;
  };

  const handleTogglePause = (_: Event, force = undefined) => {
    const newPaused = force !== undefined ? force : !paused();
    setPaused(newPaused);
    local.parentOptions?.setAutoPlay?.(!newPaused);
  };

  const handleChange = (e: Event) => {
    const newTime = (Number((e.target as HTMLInputElement).value) * totalTime()) / 1000;
    setCurrentTime(newTime);
    if (audio) audio.currentTime = newTime / 100;
  };

  return (
    <>
      <audio
        ref={audio}
        onTimeUpdate={(e) => {
          local.onTimeUpdate && (local.onTimeUpdate as (e: Event) => any)(e);
          setCurrentTime((e.target as HTMLAudioElement).currentTime * 1000);
        }}
        onLoadedData={(e) => {
          local.onLoadedData && (local.onLoadedData as (e: Event) => any)(e);
          setTotalTime((e.target as HTMLAudioElement).duration * 1000);
        }}
        onEnded={(e) => {
          local.onEnded && (local.onEnded as (e: Event) => any)(e);
          setPaused(true);
        }}
        preload={others.preload || 'auto'}
        {...others}
      />
      <div class={styles.controls}>
        <button aria-label={paused() ? 'Play audio' : 'Pause audio'} onClick={handleTogglePause}>
          <Show when={paused()} fallback={<PauseIcon />}>
            <PlayIcon />
          </Show>
        </button>
        <div class={styles.timelineWrapper}>
          <span>{new Date().millisToISOTime(currentTime())}</span>
          <label class="sr-only" for={`${props.id}-progress`}>
            Song progress
          </label>
          <input
            id={`${props.id}-progress`}
            role="progressbar"
            style={{ 'background-size': `${getPercentage()}% 100%` }}
            onChange={handleChange}
            onKeyDown={(e) => e.key === ' ' && handleTogglePause(e)}
            onInput={updateBackground}
            type="range"
            class={styles.timeline}
            classList={{ playing: !paused() }}
            step={1}
            value={getPercentage()}
          />
          <span>{new Date().millisToISOTime(totalTime())}</span>
        </div>
        <button aria-label={paused() ? 'Mute audio' : 'Unmute audio'} onClick={() => setMuted(!muted())}>
          <Show when={muted()} fallback={<SoundIcon />}>
            <MuteIcon />
          </Show>
        </button>
      </div>
    </>
  );
};

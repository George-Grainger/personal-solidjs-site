import { useI18n } from '@solid-primitives/i18n';
import type { VoidComponent } from 'solid-js';
// import { useAppContext } from '../../AppContext';
import styles from './Nav.module.scss';

declare module 'solid-js' {
  namespace JSX {
    interface SvgSVGAttributes<T> {
      role?: 'button';
    }
    interface UseSVGAttributes<T> {
      fill?: string;
      stroke?: string;
    }
  }
}

export const DarkmodeToggle: VoidComponent<{}> = () => {
  //   const context = useAppContext();
  const [t] = useI18n();

  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key == ' ') {
  //       e.preventDefault();
  //       context.isDark = !context.isDark;
  //     }
  //   };
  let context = { isDark: true };

  return (
    <>
      <symbol class="sm-cloud" id="sm-cloud-1" viewBox="0 0 102 62" fill="var(--white)">
        <path d="M90 31.5A26.2 26.2 0 0 0 64 .8a26.4 26.4 0 0 0-24.2 15.8 18.9 18.9 0 0 0-31 16.1A15 15 0 0 0 15.4 61h71.3a15 15 0 0 0 15-15c0-7-5-13-11.6-14.6Z" />
      </symbol>

      <symbol class="sm-cloud" id="sm-cloud-2" viewBox="0 0 74 49" fill="var(--white)">
        <path d="M65 18.4V18C65 8.5 56.5.8 46 .8c-9.6 0-17.6 6.5-18.7 15a18 18 0 0 0-8.8-2.3C8.7 13.5.8 21.2.8 30.7c0 8.2 6 15.1 14 16.8 1.7.7 3.5 1 5.4 1h39.5c7.9 0 14.3-7 14.3-15.6 0-6.6-3.7-12.2-9-14.5Z" />
      </symbol>

      <symbol class="sm-cloud" id="sm-cloud-3" viewBox="0 0 71 39" fill="var(--white)">
        <path d="M.5 22.8C.5 16 5 10.3 11 8.3a11.4 11.4 0 0 1 19-4.3C33.1 2 37.3.6 41.8.6c6.7 0 12.6 2.8 16.3 7.1a15.3 15.3 0 0 1-2.7 30.4H15.8C7.4 38.1.5 31.2.5 22.8Z" />
      </symbol>

      <svg
        //   onClick={() => (context.isDark = !context.isDark)}
        role="button"
        aria-pressed={context.isDark}
        //   onKeyDown={handleKeyDown}
        class={styles.svg}
        viewBox="0 0 380 170"
        fill="var(--white)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class={styles.sun} cx="295" cy="85" r="70" fill="var(--yellow-2)" />
        <circle class={styles.moon} cx="85" cy="85" r="70" mask="url(#moon-mask)"></circle>
        <path
          class={styles.stars}
          d="m242 111 3 13 13 3-13 3-3 13-3-13-13-3 13-3 3-13ZM207 31l3 13 13 3-13 3-3 13-3-13-13-3 13-3 3-13ZM297 61l3 13 13 3-13 3-3 13-3-13-13-3 13-3 3-13Z"
        />
        <path
          class={styles.dots}
          d="M330 37a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM345 107a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM295 137a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM225 87a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM190 147a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
        <g class={styles.clouds}>
          <use href="#sm-cloud-1" x="40" y="100" height="50" />
          <use href="#sm-cloud-2" x="135" y="90" height="40" />
        </g>
        <path
          class={styles.plane}
          d="M384 55H-4m409-2c-2.5-.5-7 0-7 0l-6-5-1 1 1 5h-3l-4-4v1l1 3h-1l5 2s11 .5 15 0c1.1-.14 5-1.5 2-2s.5-.5-2-1Z"
          stroke="var(--white)"
          stroke-width="2"
        />
        <defs>
          <mask id="moon-mask">
            <rect width="300" height="170" />
            <circle cx="120" cy="70" r="70" class={styles.moon_mask} fill="hsl(230, 23%, 46%)" />
          </mask>
        </defs>
      </svg>
    </>
  );
};

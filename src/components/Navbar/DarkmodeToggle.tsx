import { useI18n } from '@solid-primitives/i18n';
import type { VoidComponent } from 'solid-js';
import { useAppContext } from '../../AppContext';
import styles from './Navbar.module.css';

declare module 'solid-js' {
  namespace JSX {
    interface SvgSVGAttributes<T> {
      role?: 'button';
    }
  }
}

export const DarkmodeToggle: VoidComponent<{}> = () => {
  const context = useAppContext();
  const [t] = useI18n();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == ' ') {
      e.preventDefault();
      context.isDark = !context.isDark;
    }
  };

  return (
    <svg
      onClick={() => (context.isDark = !context.isDark)}
      role="button"
      onKeyDown={handleKeyDown}
      class={styles.toggle}
      viewBox="0 0 370 190"
      xmlns="http://www.w3.org/2000/svg"
      tabIndex={0}
    >
      <title>{context.isDark ? t('global.light_mode', {}, 'Toggle light mode') : t('global.dark_mode', {}, 'Toggle dark mode')}</title>
      <path d="M275 5H95a90 90 0 0 0 0 180h180a90 90 0 1 0 0-180Z" class={styles.outline} />
      <g clip-path="url(#a)">
        <g class={styles.stars}>
          <path d="M250.7 97a2 2 0 1 0 2.6-3 2 2 0 0 0-2.6 3Zm-24 65a2 2 0 0 0 3.3-1.5 2 2 0 1 0-3.3 1.5Zm61-125a2 2 0 1 0 2.6-3 2 2 0 0 0-2.6 3Zm40 109a2 2 0 0 0 3.3-1.5 2 2 0 1 0-3.3 1.5Zm33-102a2 2 0 1 0 2.6-3 2 2 0 0 0-2.6 3Zm16 74a2 2 0 0 0 3.3-1.5 2 2 0 1 0-3.3 1.5Z" />
          <path d="m150 43 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Zm42 78 3 12 13 3-13 3-3 13-3-13-12-3 12-3 3-12Zm49-52 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" />
        </g>
        <path d="M271 161a66 66 0 1 0 0-132 66 66 0 0 0 0 132Z" class={styles.sun} />
        <circle mask="url(#b)" cx="190" cy="95" r="66" class={styles.moon} />
        <g class={styles.cloud}>
          <path d="M269.7 146.9a10.4 10.4 0 0 0 2-.2 11.3 11.3 0 0 0 9.3-11.2 11.4 11.4 0 0 0-14-11 17.7 17.7 0 0 0-17.5-16.6c-3.2 0-6.3.8-9 2.4A24.8 24.8 0 0 0 217.9 95a24.6 24.6 0 0 0-24.1 30.1 11.3 11.3 0 0 0-15.7 10.5 11.4 11.4 0 0 0 13 11.3h78.7Z" />
          <path d="M342.1 120h.5a5.2 5.2 0 0 0 3.5-1.2 9 9 0 0 0-1-16 9 9 0 0 0-3.9-.7 15.8 15.8 0 0 0-4.5-12.5 15.6 15.6 0 0 0-26.4 8.5 11.3 11.3 0 1 0-3.5 21.9h34.5a8.5 8.5 0 0 0 .8 0Z" />
        </g>
        <path
          d="M378 68.4h-7.1l-6.3-5.4-1 .6 1.8 4.9h-3.6l-3.4-3.4-.8.4 1.3 3h-.6c1.4 1 3 1.7 4.5 2.3h15c.6 0 2.2 0 2.2-1.3 0-1-1.2-1-2-1v-.1Zm-20.7-.4H20h98.1"
          class={styles.plane}
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect fill="var(--white)" x="10" y="10" width="350" height="170" rx="85" />
        </clipPath>
        <mask id="b">
          <rect fill="var(--white)" x="30" y="20" width="320" height="165" rx="86" ry="86" />
          <circle class={styles.moonMask} cx="360" cy="85" r="66" />
        </mask>
      </defs>
    </svg>
  );
};

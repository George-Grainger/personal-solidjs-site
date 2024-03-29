import { useI18n } from '@solid-primitives/i18n';
import { createEffect, createSignal, Index, VoidComponent } from 'solid-js';
import { AnimationSelect } from './AnimationSelect';
import { DarkmodeToggle } from './DarkmodeToggle';
import LanguageSelect from './LanguageSelect';
import styles from './Navbar.module.css';
import { nav as englishLinks } from '../../../lang/en/global.json';
import { NavLink } from '@solidjs/router';

export const Navbar: VoidComponent<{}> = () => {
  const [t] = useI18n();
  const [expanded, setExpanded] = createSignal(false);
  let header: HTMLElement | undefined;

  const handleClick = () => {
    header?.classList.add('no-delay');
    setExpanded(!expanded());
  };

  createEffect(() => {
    if (!expanded()) {
      header?.classList.add('no-delay');
      setTimeout(() => header?.classList.remove('no-delay'));
    }
    header?.classList.toggle('cover', expanded());
  });

  window.addEventListener('resize', () => {
    if (matchMedia('(min-width: 60rem)').matches) {
      setExpanded(false);
    }
  });

  return (
    <header ref={header}>
      <nav class={styles.nav}>
        <ul
          class={styles.links}
          classList={{ [styles.expanded]: expanded() }}
          id="primary-nav-links"
          aria-label="Navigation links"
          role="list"
        >
          <Index each={englishLinks}>
            {(defaultLink, i) => (
              <li class={styles.link}>
                {/* Requires reasonable assumptions links consistent across all languages */}
                <NavLink href={t(`global.nav.${i}.path`, {}, defaultLink().path)} onClick={() => setExpanded(false)}>
                  {t(`global.nav.${i}.title`, {}, defaultLink().title)}
                </NavLink>
              </li>
            )}
          </Index>
        </ul>
        <ul aria-label="Site settings" role="list">
          <li aria-label="Dark mode preference">
            <DarkmodeToggle />
          </li>
          <li aria-label="Animations preference">
            <AnimationSelect />
          </li>
          <li aria-label="Language preference">
            <LanguageSelect />
          </li>
        </ul>
        <button class={styles.hamburgerContainer} aria-controls="primary-nav-links" aria-expanded={expanded()} onClick={handleClick}>
          <svg class={styles.hamburger} fill="currentColor" aria-hidden="true" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22H0v-4h22v4Zm0-9H0V9h22v4Zm0-9H0V0h22v4Z" />
          </svg>
          <span class="sr-only">Mobile menu</span>
        </button>
      </nav>
    </header>
  );
};

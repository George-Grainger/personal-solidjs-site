import { useI18n } from '@solid-primitives/i18n';
import { createSignal, Index, VoidComponent } from 'solid-js';
import { AnimationSelect } from './AnimationSelect';
import { DarkmodeToggle } from './DarkmodeToggle';
import LanguageSelect from './LanguageSelect';
import styles from './Navbar.module.css';
import { nav as englishLinks } from '../../../lang/en/global.json';
import { TransitionLink } from '../Button';

export const Navbar: VoidComponent<{}> = () => {
  const [t] = useI18n();
  const [expanded, setExpanded] = createSignal(false);

  return (
    <header>
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
                <TransitionLink href={t(`global.nav.${i}.path`, {}, defaultLink().path)}>
                  {t(`global.nav.${i}.title`, {}, defaultLink().title)}
                </TransitionLink>
              </li>
            )}
          </Index>
        </ul>
        <ul aria-label="Site settings" role="list">
          <li>
            <DarkmodeToggle />
          </li>
          <li>
            <AnimationSelect />
          </li>
          <li>
            <LanguageSelect />
          </li>
        </ul>
        <li>
          <button
            class={styles.hamburgerContainer}
            aria-controls="primary-nav-links"
            aria-expanded={expanded()}
            onClick={() => setExpanded(!expanded())}
          >
            <svg class={styles.hamburger} aria-hidden="true" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 22H0v-4h22v4Zm0-9H0V9h22v4Zm0-9H0V0h22v4Z" />
            </svg>
            <span class="sr-only">Mobile menu</span>
          </button>
        </li>
      </nav>
    </header>
  );
};

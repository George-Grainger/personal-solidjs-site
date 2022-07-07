import { useI18n } from '@solid-primitives/i18n';
import { NavLink } from 'solid-app-router';
import { Index, VoidComponent } from 'solid-js';
import { AnimationSelect } from './AnimationSelect';
import { DarkmodeToggle } from './DarkmodeToggle';
import LanguageSelect from './LanguageSelect';
import styles from './Navbar.module.css';
import { nav as englishLinks } from '../../../lang/en/global.json';

export const Navbar: VoidComponent<{}> = () => {
  const [t] = useI18n();

  return (
    <nav class={styles.nav}>
      <ul>
        <Index each={englishLinks}>
          {(defaultLink, i) => (
            <li class={styles.link}>
              {/* Requires reasonable assumptions links consistent across all languages */}
              <NavLink href={t(`global.nav.${i}.path`, {}, defaultLink().path)}>
                {t(`global.nav.${i}.title`, {}, defaultLink().title)}
              </NavLink>
            </li>
          )}
        </Index>
        <li>
          <DarkmodeToggle />
        </li>
        <li>
          <AnimationSelect />
        </li>
        <li>
          <LanguageSelect />
        </li>
        <li class={styles.hamburgerContainer}>
          <svg class={styles.hamburger} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22H0V18.3333H22V22ZM22 12.8333H0V9.16667H22V12.8333ZM22 3.66667H0V0H22V3.66667Z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

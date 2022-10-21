import { useI18n } from '@solid-primitives/i18n';
import { Index } from 'solid-js';
import { FooterScene } from './svg';
import { VoidSVG } from './svg/svg-types';
import { footer } from '../../lang/en/global.json';
import { NavLink } from '@solidjs/router';

export const Footer: VoidSVG<{}> = () => {
  const [t] = useI18n();

  return (
    <footer>
      <div class="footerImage">
        <FooterScene aria-hidden={true} />
      </div>
      <div class="footerText">
        <strong>{t('global.footer.preferences', {}, 'Preferences')}</strong>
        <ul role="list">
          <Index each={footer['preference-links']}>
            {(defaultLink, i) => (
              <li>
                <NavLink href={t(`global.footer.preference-links.${i}.path`, {}, defaultLink().path)}>
                  {t(`global.footer.preference-links.${i}.title`, {}, defaultLink().title)}
                </NavLink>
              </li>
            )}
          </Index>
        </ul>
        <strong>{t('global.footer.created-by', {}, 'Created by')}</strong>
        <span>George Grainger</span>
      </div>
    </footer>
  );
};

import { I18nContext, createI18nContext, useI18n } from '@solid-primitives/i18n';
import { A, useLocation, useMatch, useNavigate } from 'solid-start';
import { createContext, useContext, splitProps, ParentProps, JSX, ParentComponent } from 'solid-js';

const DICT = {
  en: async () => (await import('~/../lang/en/en')).default(),
  fr: async () => (await import('~/../lang/fr/fr')).default(),
};

export const LOCALES = Object.keys(DICT);
export type Locale = keyof typeof DICT;

const I18nRouteContext = createContext<{
  navigate: (s?: string) => void;
  route: (s: string) => string;
  localize: (s: string) => string;
}>();

export const useI18nRoute = () => useContext(I18nRouteContext)!;
const createI18nRouteContext = () => {
  const [, { locale }] = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const localeMatcher = useMatch(() => '/:locale/*url', { locale: LOCALES });

  const localizedRoute = (locale: string) => {
    const match = localeMatcher()?.params;
    return '/' + locale + (match ? '/' + match.url : location.pathname) + location.search;
  };

  const localize = (v: string) => `/${locale()}/${v}`;

  const switchLocale = (l = locale()) => navigate(localizedRoute(l));
  return { navigate: switchLocale, route: localizedRoute, localize };
};

export const LocaleSwitchProvider = (props: ParentProps) => {
  return (
    <I18nContext.Provider value={createI18nContext(DICT, 'en')}>
      <I18nRouteContext.Provider value={createI18nRouteContext()}>{props.children}</I18nRouteContext.Provider>
    </I18nContext.Provider>
  );
};

export function NavigateToLocalizedRoute() {
  useI18nRoute().navigate();
  return null;
}

export function LocaleSwitcher() {
  const [, { locale }] = useI18n();
  const switcher = useI18nRoute();

  return (
    <select onChange={(e) => switcher.navigate(e.target.value)}>
      {Object.keys(DICT).map((l) => (
        <option value={l} selected={l === locale()}>
          {l}
        </option>
      ))}
    </select>
  );
}

const Link: ParentComponent<JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }> = (props) => {
  const [local, others] = splitProps(props, ['children', 'href']);
  const { localize } = useI18nRoute();

  return (
    <A href={localize(local.href)} {...others}>
      {local.children}
    </A>
  );
};

export { Link as A };

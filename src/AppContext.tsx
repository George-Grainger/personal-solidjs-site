import { ParentComponent, createContext, createEffect, useContext, createResource } from 'solid-js';
import { Meta, Title } from 'solid-meta';
import { createLocalStorage } from '@solid-primitives/storage';
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { useLocation } from 'solid-app-router';

const langs: { [lang: string]: any } = {
  en: async () => (await import('../lang/en/en')).default(),
  fr: async () => (await import('../lang/fr/fr')).default(),
};

type DataParams = {
  locale: string;
  page: string;
};

interface AppContextInterface {
  isDark: boolean;
  isReduceMotion: boolean;
}

const DARK_MEDIA = '(prefers-color-scheme: dark)';
const MOTION_MEDIA = '(prefers-reduced-motion: reduce)';

const AppContext = createContext<AppContextInterface>({
  isDark: false,
  isReduceMotion: false,
});

export const AppContextProvider: ParentComponent = (props) => {
  const getPreference = (key: string, mediaToMatch: string) => {
    return settings[key] === 'true' ? true : settings[key] === 'false' ? false : window.matchMedia(mediaToMatch).matches;
  };

  const [settings, set] = createLocalStorage();

  const isDark = () => getPreference('dark', DARK_MEDIA);
  const isReduceMotion = () => getPreference('reduce-motion', MOTION_MEDIA);

  const browserLang = navigator.language.slice(0, 2);
  const location = useLocation();
  if (location.query.locale) {
    set('locale', location.query.locale);
  } else if (!settings.locale && langs.hasOwnProperty(browserLang)) {
    set('locale', browserLang);
  }
  const i18n = createI18nContext({}, (settings.locale || 'en') as string);
  const [t, { add, locale }] = i18n;
  const params = (): DataParams => {
    const locale = i18n[1].locale();
    let page = location.pathname.slice(1);
    if (page == '') {
      page = 'home';
    }
    return { locale, page };
  };
  const [lang] = createResource(params, ({ locale }) => langs[locale]());
  createEffect(() => {
    if (!lang.loading) add(i18n[1].locale(), lang() as Record<string, any>);
  });
  createEffect(() => {
    set('locale', i18n[1].locale());
    document.documentElement.lang = locale();
  });

  createEffect(() => {
    if (isDark()) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  });

  createEffect(() => {
    if (isReduceMotion()) {
      document.documentElement.classList.add('reduce-motion');
      document.documentElement.classList.remove('no-preference');
    } else {
      document.documentElement.classList.add('no-preference');
      document.documentElement.classList.remove('reduce-motion');
    }
  });

  const store = {
    set isDark(value) {
      set('dark', value === true ? 'true' : 'false');
    },
    get isDark() {
      return isDark();
    },
    set isReduceMotion(value) {
      set('reduce-motion', value === true ? 'true' : 'false');
    },
    get isReduceMotion() {
      return isReduceMotion();
    },
    get loading() {
      return lang.loading;
    },
  };

  return (
    <AppContext.Provider value={store}>
      <Title>{t('global.title', {}, 'George Grainger · Votre prochain employé ;)')}</Title>
      <Meta name="lang" content={locale()} />
      <I18nContext.Provider value={i18n}>{props.children}</I18nContext.Provider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

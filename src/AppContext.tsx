import { Component, ParentComponent, createContext, createEffect, useContext, createResource, onMount, onCleanup } from 'solid-js';
import { Meta, Title } from 'solid-meta';
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { useLocation, useNavigate } from '@solidjs/router';
import useLocalStorage from './hooks/useLocalStorage';
import { routes } from './routes';

// Useful functions to create time from milliseconds in '0:00' format
declare global {
  interface Date {
    millisToISOTime: (milliseconds: number) => string;
  }
}

Date.prototype.millisToISOTime = (milliseconds: number) => {
  const date = new Date(0);
  date.setMilliseconds(milliseconds);
  return date.toISOString().substring(15, 19);
};

const langs: { [lang: string]: any } = {
  en: async () => (await import('../lang/en/en')).default(),
  fr: async () => (await import('../lang/fr/fr')).default(),
};

type PreloadableComponent = Component<any> & {
  preload: () => Promise<{
    default: Component<any>;
  }>;
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
  const context = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  let prevTimeout: number | undefined;
  let prevPathname = location.pathname;

  const handleNavigation = (pathname: string, hash: string) => {
    const href = pathname + hash;

    // Don't transition for links to same page
    if (hash && pathname === prevPathname) {
      document.querySelector(hash)?.scrollIntoView(true);
      return false;
    }

    const header = document.querySelector('header') as Element;
    const delayInS =
      context.isReduceMotion || header.classList.contains('no-delay')
        ? 0
        : Number(getComputedStyle(header, '::before').getPropertyValue('transition-duration').replace('s', ''));

    (routes.find((route) => route.path === href)?.component as PreloadableComponent)?.preload();

    if (pathname !== prevPathname) {
      prevPathname = pathname;
      header?.classList.add('cover');

      setTimeout(() => {
        navigate(href, { scroll: true });
      }, delayInS * 333);

      clearTimeout(prevTimeout);
      prevTimeout = setTimeout(() => {
        header?.classList.remove('cover');
      }, delayInS * 1000);
    }
    return false;
  };

  onMount(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
        return false;
      }

      const a = (e.target as HTMLElement)?.closest('a') as HTMLAnchorElement | undefined;

      if (!a || a.host !== window.location.host || a.hasAttribute('download')) {
        return false;
      }

      if (a.hash) {
        a.pathname === prevPathname ? window.history.replaceState(null, '', a.href) : window.history.pushState(null, '', a.href);
      }

      e.preventDefault();
      return handleNavigation(a.pathname, a.hash);
    };

    const handlePopState = () => handleNavigation(location.pathname, location.hash);

    window.addEventListener('popstate', handlePopState, false);
    document.querySelector('body')?.addEventListener('click', handleAnchorClick, false);
    onCleanup(() => document.querySelector('body')?.removeEventListener('click', handleAnchorClick));
    onCleanup(() => document.querySelector('body')?.removeEventListener('click', handlePopState));
  });

  const [isDark, setDark] = useLocalStorage('dark', window.matchMedia(DARK_MEDIA).matches);
  const [isReduceMotion, setReduceMotion] = useLocalStorage('reduce-motion', window.matchMedia(MOTION_MEDIA).matches);

  const browserLang = navigator.language.slice(0, 2);
  const [getLocale, setLocale] = useLocalStorage<string>('locale', location.query.locale || browserLang || 'en');

  const i18n = createI18nContext({}, getLocale());
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
    setLocale(i18n[1].locale());
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
      setDark(value);
    },
    get isDark() {
      return isDark();
    },
    set isReduceMotion(value) {
      setReduceMotion(value);
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
      <Title>{t('global.title', {}, "George Grainger's Home")}</Title>
      <Meta name="lang" content={locale()} />
      <I18nContext.Provider value={i18n}>{props.children}</I18nContext.Provider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

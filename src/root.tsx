// @refresh reload
import { useI18n } from '@solid-primitives/i18n';
import { Suspense, createRenderEffect, mergeProps } from 'solid-js';
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Outlet, Route, Routes, Scripts, Title, useParams } from 'solid-start';
import { LOCALES, Locale, LocaleSwitchProvider as LocaleProvider, LocaleSwitcher, NavigateToLocalizedRoute, useI18nRoute } from '~/locales';
import { Nav } from '~/components/Nav';
import './root.scss';

export default function Root() {
  return (
    <LocaleProvider>
      <Routes>
        <Route path={[':locale']} matchFilters={{ locale: LOCALES }} component={App}>
          <FileRoutes />
        </Route>
        <Route path="*" component={NavigateToLocalizedRoute} />
      </Routes>
    </LocaleProvider>
  );
}

function App() {
  const params = mergeProps({ locale: 'en' }, useParams<{ locale: Locale }>());
  const [, { locale }] = useI18n();
  createRenderEffect(() => locale(params.locale));

  return (
    <Html lang={locale()}>
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Nav />
            <LocaleSwitcher />
            <Outlet />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

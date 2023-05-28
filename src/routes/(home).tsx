import { useI18n } from '@solid-primitives/i18n';
import { createEffect } from 'solid-js';
import { Title, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';

export function routeData() {
  const students = createServerData$(async (_, { request }) => {
    const response = await import('~/../lang/en/en');
    console.log(response);
    return response;
  });
  return { students };
}

export default function Home() {
  const [t] = useI18n();

  return (
    <main>
      <Title>Hello World</Title>
      <h1>{t('home.title')}</h1>
      <blockquote>{t('home.subtitle')}</blockquote>
      <p>
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

import { redirect } from 'solid-start';
import { createHandler, renderAsync, StartServer } from 'solid-start/entry-server';
import { LOCALES } from '~/locales';

export default createHandler(
  ({ forward }) => {
    return async (event) => {
      const request: Request = event.request;

      const regex = /^(https?:\/\/[^/]+)(\/.*)$/;
      const matches = request.url.match(regex);
      const basePath = matches?.[1] || '';
      const pathname = matches?.[2] || '';
      const pathSegments = pathname.split('/').filter((segment) => segment !== '');

      if (LOCALES.includes(pathSegments[0])) {
        return forward(event);
      }

      const locale = request.headers.get('accept-language')?.split(',')?.[0]?.substring(0, 2) || 'en';
      return redirect(`${basePath}/${locale}${pathname}`);
    };
  },
  renderAsync((event) => <StartServer event={event} />),
);

import { useI18n } from '@solid-primitives/i18n';
import { RouteDataFuncArgs } from '@solidjs/router';
import { createResource } from 'solid-js';
export interface ProjectData {
  loading: boolean;
  fallback: boolean;
  project?: ProjectFile;
}

interface ProjectFile {
  attributes: string;
  html: string;
}

function noThrow<T>(x: Promise<T>): Promise<T | undefined> {
  return x.catch(() => undefined);
}

export async function getProject(lang: string, resource?: string): Promise<ProjectFile | undefined> {
  return await noThrow(import(`../../lang/${lang}/projects/${resource}.md`));
}

export const ProjectData = ({ params, location }: RouteDataFuncArgs) => {
  const [, { locale }] = useI18n();

  const paramList = () => ({
    lang: location.query.locale ? location.query.locale : locale(),
    resource: params.id,
  });

  const [resource] = createResource(paramList, async ({ lang, resource }) => {
    const requestedLang = await getProject(lang, resource);
    if (requestedLang) return { project: requestedLang, fallback: false };
    return { project: await getProject('en', resource), fallback: true };
  });

  return {
    get project() {
      return resource()?.project;
    },
    get loading() {
      return resource.loading;
    },
    get fallback() {
      return !!resource()?.fallback;
    },
  };
};

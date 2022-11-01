import { useRouteData } from '@solidjs/router';
import { Component, Match, onMount, Switch } from 'solid-js';
import { ProjectData } from './Project.data';
import styles from '../page-styles/project.module.css';
import html from 'solid-js/html';
import { Loading } from '../components/svg';

const Projects: Component<{}> = () => {
  const data = useRouteData<ProjectData>();

  const handleMount = (content: HTMLElement) => {
    if (!content.firstChild!.nextSibling) {
      return;
    }

    if (data.fallback) {
      content.insertBefore(
        html`<p><strong class="${styles.warning}">Note:</strong> Unfortunately that project isn't available in your language</p>`,
        content.firstChild!.nextSibling,
      );
    }

    if (data.project?.attributes?.['in-progress']) {
      content.insertBefore(html`<span class="${styles.inProgress}">In Progress</span>`, content.firstChild!.nextSibling);
    }

    content.scrollIntoView();
  };

  return (
    <section classList={{ 'fp-section': data.loading }}>
      <Switch fallback={'Failed to load markdown...'}>
        <Match when={data.loading}>
          <Loading />
        </Match>
        <Match when={data.project}>
          <article
            ref={(content) => onMount(() => handleMount(content))}
            class={`${styles.projectArticle} flow`}
            innerHTML={data.project?.html}
          />
        </Match>
      </Switch>
    </section>
  );
};

export default Projects;

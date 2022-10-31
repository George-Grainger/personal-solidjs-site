import { useRouteData } from '@solidjs/router';
import { Component, Match, onMount, Switch } from 'solid-js';
import { ProjectData } from './Project.data';
import styles from '../page-styles/project.module.css';
import html from 'solid-js/html';

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

    window.scrollTo(0, 0);
  };

  return (
    <section>
      <Switch fallback={'Failed to load markdown...'}>
        <Match when={data.loading}>Loading project...</Match>
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

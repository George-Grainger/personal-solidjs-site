import { useRouteData } from '@solidjs/router';
import { Component, Match, Show, Switch } from 'solid-js';
import { ProjectData } from './Project.data';

const Projects: Component<{}> = (props) => {
  const data = useRouteData<ProjectData>();

  return (
    <section>
      <Switch fallback={'Failed to load markdown...'}>
        <Match when={data.loading}>Loading project...</Match>
        <Match when={data.project}>
          <Show when={data.fallback}>
            <div>Unfortunately that project isn't available is not currently available in your language.</div>
          </Show>
          <div class="flow" innerHTML={data.project?.html} />
        </Match>
      </Switch>
    </section>
  );
};

export default Projects;

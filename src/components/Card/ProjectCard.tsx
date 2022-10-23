import { For, Match, onCleanup, onMount, Show, Switch, VoidComponent } from 'solid-js';
import { TransitionButton } from '../Button';
import styles from './Card.module.css';
import {
  Assembly,
  CPP,
  Firebase,
  Java,
  Python,
  NextJS,
  TailwindCSS,
  SolidJS,
  HeartLogo,
  PyTorchLogo,
  JUnitLogo,
  OpenSourceLogo,
  WordPressLogo,
  W3CLogo,
  ResearchLogo,
  IoTLogo,
} from './Logos';

export interface ProjectCardProps {
  index: string | number;
  title: string;
  subtitle: string;
  description: string;
  thumbnails: string[];
  alt: string;
  link: string;
  technologies: { name: string; href: string }[];
}

const Options: VoidComponent<{ name: string }> = (technology) => {
  return (
    <>
      <Switch>
        <Match when={technology.name === 'NextJS'}>
          <NextJS />
        </Match>
        <Match when={technology.name === 'TailwindCSS'}>
          <TailwindCSS />
        </Match>
        <Match when={technology.name === 'Firebase'}>
          <Firebase />
        </Match>
        <Match when={technology.name === 'SolidJS'}>
          <SolidJS />
        </Match>
        <Match when={technology.name === 'Love'}>
          <HeartLogo />
        </Match>
        <Match when={technology.name === 'Python'}>
          <Python />
        </Match>
        <Match when={technology.name === 'Research'}>
          <ResearchLogo />
        </Match>
        <Match when={technology.name === 'PyTorch'}>
          <PyTorchLogo />
        </Match>
        <Match when={technology.name === 'Java'}>
          <Java />
        </Match>
        <Match when={technology.name === 'JUnit'}>
          <JUnitLogo />
        </Match>
        <Match when={technology.name === 'Open Source'}>
          <OpenSourceLogo />
        </Match>
        <Match when={technology.name === 'WordPress'}>
          <WordPressLogo />
        </Match>
        <Match when={technology.name === 'Accessibility'}>
          <W3CLogo />
        </Match>
        <Match when={technology.name === 'Assembly'}>
          <Assembly />
        </Match>
        <Match when={technology.name === 'IoT'}>
          <IoTLogo />
        </Match>
        <Match when={technology.name === 'C++'}>
          <CPP />
        </Match>
      </Switch>
      <strong>{technology.name}</strong>
    </>
  );
};

export const ProjectCard: VoidComponent<ProjectCardProps> = (props) => {
  let card: HTMLElement | undefined;

  onMount(() => {
    if (!card) {
      return;
    }

    // Required since front and backs of cards differ in height
    const calcualteOffsets = () => {
      // Prevent weridness with grid sizing
      card!.style.setProperty('margin-bottom', '0');
      const articleHeight = card!.clientHeight;
      const frontHeight = (card!.firstChild as HTMLElement).clientHeight;
      card!.style.setProperty('margin-bottom', `${frontHeight - articleHeight}px`);
    };

    window.addEventListener('resize', calcualteOffsets);
    dispatchEvent(new Event('resize'));
    onCleanup(() => window.removeEventListener('resize', calcualteOffsets));
  });

  const handleMouseEnter = (e: Event) => {
    const el = card as HTMLElement;

    const elIndex = Number(el.getAttribute('attr-index'));
    const PER_ROW = getComputedStyle(el.parentElement as Element)
      .getPropertyValue('grid-template-columns')
      .split(' ').length;

    const adjacent = el.parentElement?.querySelectorAll(`article:nth-child(${PER_ROW}n + ${elIndex % PER_ROW})`);
    const projectTitle = el.parentElement?.previousElementSibling?.querySelector('h2');

    if (matchMedia('(pointer: coarse)').matches) {
      el.scrollIntoView(true);
    }
    // Check if it's a middle value
    const mid = (PER_ROW + 1) / 2;
    if (elIndex % PER_ROW === Math.floor(mid) % PER_ROW || elIndex % PER_ROW === Math.ceil(mid) % PER_ROW) {
      projectTitle?.classList.add(styles.moveUp);
    }

    const difference = el.clientHeight - (el.firstChild as HTMLElement).clientHeight;
    adjacent?.forEach((sibling) => {
      const siblingIndex = Number(sibling.getAttribute('attr-index'));
      if (siblingIndex < elIndex) {
        (sibling as HTMLElement)?.style.setProperty('--move-by', `-3rem`);
        sibling.classList.add(styles.moveUp);
      } else if (siblingIndex > elIndex) {
        (sibling as HTMLElement)?.style.setProperty('--move-by', `${difference}px`);
        sibling.classList.add(styles.moveDown);
      }
    });
  };

  const handleMouseLeave = (e: Event) => {
    const moved = card?.parentElement?.parentElement?.querySelectorAll(`.${styles.moveUp}, .${styles.moveDown}`);
    moved?.forEach((el) => el.classList.remove(styles.moveUp, styles.moveDown));
    if (!Array.from(moved || []).some((el) => el.matches(':hover'))) {
      moved?.forEach((el) => (el as HTMLElement).style.removeProperty('--move-by'));
    }
  };

  return (
    <article
      ref={card}
      id={`project-title-${props.index}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusIn={handleMouseEnter}
      onFocusOut={handleMouseLeave}
      class={styles.card}
      attr-index={props.index}
    >
      <div class={styles.front}>
        <img
          width="324"
          height="390"
          src={props.thumbnails[0]}
          srcset={props.thumbnails.map((url, index) => `${url} ${index + 1}x`).join()}
          alt={props.alt || ''}
          loading="lazy"
        />
        <h3 class={styles.frontTitle}>{props.title}</h3>

        <strong class={styles.subtitle}>{props.subtitle}</strong>
      </div>

      <div class={styles.back}>
        <h3 class={styles.backTitle}>{props.title}</h3>
        <p class={styles.description}>{props.description}</p>
        <div class={styles.languages} style={{ '--columns': props.technologies?.length }}>
          <For each={props.technologies}>
            {(technology: { name: string; href?: string }) => (
              <Show
                when={technology.href}
                fallback={
                  <span>
                    <Options name={technology.name}></Options>
                  </span>
                }
              >
                <a href={technology.href} target="_blank" rel="noopener noreferrer">
                  <Options name={technology.name}></Options>
                </a>
              </Show>
            )}
          </For>
        </div>
        <TransitionButton href={props.link} class={styles.btn}>
          View Details
        </TransitionButton>
      </div>
    </article>
  );
};

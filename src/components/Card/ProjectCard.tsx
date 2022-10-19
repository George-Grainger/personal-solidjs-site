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
  technologies: string[];
}

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

  const handleMouseLeave = (e: MouseEvent) => {
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
      class={styles.card}
      attr-index={props.index}
    >
      <div class={styles.front}>
        <img
          class={styles.thumbnail}
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
            {(technology: string) => (
              <>
                <Switch>
                  <Match when={technology === 'NextJS'}>
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                      <NextJS />
                    </a>
                  </Match>
                  <Match when={technology === 'TailwindCSS'}>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                      <TailwindCSS />
                    </a>
                  </Match>
                  <Match when={technology === 'Firebase'}>
                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                      <Firebase />
                    </a>
                  </Match>
                  <Match when={technology === 'SolidJS'}>
                    <a href="https://www.solidjs.com/" target="_blank" rel="noopener noreferrer">
                      <SolidJS />
                    </a>
                  </Match>
                  <Match when={technology === 'Love'}>
                    <HeartLogo />
                  </Match>
                  <Match when={technology === 'Python'}>
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                      <Python />
                    </a>
                  </Match>
                  <Match when={technology === 'Research'}>
                    <ResearchLogo />
                  </Match>
                  <Match when={technology === 'PyTorch'}>
                    <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                      <PyTorchLogo />
                    </a>
                  </Match>
                  <Match when={technology === 'Java'}>
                    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                      <Java />
                    </a>
                  </Match>
                  <Match when={technology === 'JUnit'}>
                    <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
                      <JUnitLogo />
                    </a>
                  </Match>
                  <Match when={technology === 'Open Source'}>
                    <a href="https://opensource.org/" target="_blank" rel="noopener noreferrer">
                      <OpenSourceLogo />
                    </a>
                  </Match>
                  <Match when={technology === 'WordPress'}>
                    <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
                      <WordPressLogo />
                    </a>
                  </Match>
                  <Match when={technology === 'Accessibility'}>
                    <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
                      <W3CLogo />
                    </a>
                  </Match>
                  <Match when={technology === 'Assembly'}>
                    <a href="https://www.assemblyscript.org/" target="_blank" rel="noopener noreferrer">
                      <Assembly />
                    </a>
                  </Match>
                  <Match when={technology === 'IoT'}>
                    <a href="https://en.wikipedia.org/wiki/Internet_of_things" target="_blank" rel="noopener noreferrer">
                      <IoTLogo />
                    </a>
                  </Match>
                  <Match when={technology === 'C++'}>
                    <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer">
                      <CPP />
                    </a>
                  </Match>
                </Switch>
                <strong>{technology}</strong>
              </>
            )}
          </For>
        </div>
        <TransitionButton href={props.link} class={styles.btn}>
          More info
        </TransitionButton>
      </div>
    </article>
  );
};

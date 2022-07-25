import { VoidComponent } from 'solid-js';
import { TransitionButton } from '../Button';
import styles from './Card.module.css';
import { Assembly, CPP, Firebase, Java, JavaScript, Python, NextJS, TailwindCSS } from './Logos';

export interface CardProps {
  index: string | number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  alt: string;
  languages?: string[];
}

export const Card: VoidComponent<CardProps> = (props) => {
  const handleMouseEnter = (e: MouseEvent) => {
    const el = e.target as Element;
    const elIndex = Number(el.getAttribute('attr-index'));
    const PER_ROW = Number(getComputedStyle(el.parentElement as Element).getPropertyValue('--num-per-row'));
    const adjacent = el.parentElement?.querySelectorAll(`article:nth-child(${PER_ROW}n + ${elIndex % PER_ROW})`);
    const projectTitle = el.parentElement?.previousElementSibling?.querySelector('h2');

    if (matchMedia('(max-width: 60rem)').matches) {
      // el.scrollIntoView(true);
    }
    if (PER_ROW === 1 || (matchMedia('(max-width: 80rem)').matches && elIndex % PER_ROW === 1) || elIndex % PER_ROW === 2) {
      projectTitle?.classList.add(styles.moveUp);
    }

    adjacent?.forEach((sibling) => {
      const siblingIndex = Number(sibling.getAttribute('attr-index'));
      if (siblingIndex < elIndex) {
        sibling.classList.add(styles.moveUp);
      } else if (siblingIndex > elIndex) {
        sibling.classList.add(styles.moveDown);
      }
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const moved = (e.target as Element).parentElement?.parentElement?.querySelectorAll(`.${styles.moveUp}, .${styles.moveDown}`);
    moved?.forEach((el) => el.classList.remove(styles.moveUp, styles.moveDown));
  };

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} class={styles.card} attr-index={props.index}>
      <div class={styles.front}>
        <img class={styles.thumbnail} src={props.thumbnail} alt={props.alt || ''} />
        <h3 class={styles.frontTitle}>{props.title}</h3>
        <strong class={styles.subtitle}>{props.subtitle}</strong>
      </div>

      <div class={styles.back}>
        <h3 class={styles.backTitle}>{props.title}</h3>
        <p class={styles.description}>{props.description}</p>
        <div class={styles.languages}>
          <Python />
          <strong>Python</strong>
          <JavaScript />
          <strong>JavaScript</strong>
          <CPP />
          <strong>C++</strong>
        </div>
        <TransitionButton href="/about">More info</TransitionButton>
      </div>
    </article>
  );
};

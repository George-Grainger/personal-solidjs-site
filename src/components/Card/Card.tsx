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
    const moved = (e.target as Element).parentElement?.querySelectorAll(`article.${styles.moveUp}, article.${styles.moveDown}`);
    moved?.forEach((sibling) => sibling.classList.remove(styles.moveUp, styles.moveDown));
  };

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} class={styles.card} attr-index={props.index}>
      <div class={styles.front}>
        <img class={styles.thumbnail} src={props.thumbnail} alt={props.alt || ''} />
        <h3 class={styles.frontTitle}>{props.title}</h3>
        <p class={styles.subtitle}>{props.subtitle}</p>
      </div>

      <div class={styles.back}>
        <h3 class={styles.backTitle}>{props.title}</h3>
        <p class={styles.description}>{props.description}</p>
        <div class={styles.languages}>
          <Python />
          <p>Python</p>
          <JavaScript />
          <p>JavaScript</p>
          <CPP />
          <p>C++</p>
        </div>
        <TransitionButton href="/about" class={styles.btn}>
          More info
        </TransitionButton>
      </div>
    </article>
  );
};

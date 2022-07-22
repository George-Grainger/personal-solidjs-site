import { VoidComponent } from 'solid-js';
import { Button } from '../Button';
import styles from './Card.module.css';
import { Assembly, CPP, Firebase, Java, JavaScript, Python, NextJS, TailwindCSS } from './Logos';

interface CardProps {
  index: string | number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  alt: string;
  languages?: string[];
}

export const Card: VoidComponent<CardProps> = (props) => {
  return (
    <article class={styles.card} style={{ '--index': `${props.index}` }}>
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
        <Button class={styles.btn}>More info</Button>
      </div>
    </article>
  );
};

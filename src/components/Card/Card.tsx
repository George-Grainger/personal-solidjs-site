import { VoidComponent } from 'solid-js';
import { Button } from '../Button';
import styles from './Card.module.css';
import { Assembly, CPP, Firebase, Java, JavaScript, Python, NextJS, TailwindCSS } from './Logos';

interface CardProps {
  rank: string | number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  alt: string;
  languages?: string[];
}

export const Card: VoidComponent<CardProps> = (props) => {
  return (
    <article class={styles.card}>
      <div class={styles.rank}>{props.rank}</div>

      <div class={styles.front}>
        <img class={styles.thumbnail} src={props.thumbnail} alt={props.alt || ''} />
        <div class={styles.overview}>
          <h3 class={styles.name}>{props.title}</h3>
          {/* <p class={styles.date}>
            <span class="sr-only">Last commit: </span>Jul 21 - Aug 22
          </p> */}
          <p class={styles.focus}>{props.subtitle}</p>
        </div>
      </div>

      <div class={styles.back}>
        <h3 class={styles.name}>{props.title}</h3>
        <p class={styles.description}>{props.description}</p>
        <div class={styles.languages}>
          <Python />
          <p class={styles.languageName}>Python</p>
          <JavaScript />
          <p class={styles.languageName}>JavaScript</p>
          <CPP />
          <p class={styles.languageName}>C++</p>
        </div>
        <Button class={styles.btn}>More info</Button>
      </div>

      <div class={styles.background}></div>
    </article>
  );
};

import { useI18n } from '@solid-primitives/i18n';
import { Component, onMount } from 'solid-js';
import { Button } from '../components/Button';
import { HeroScene } from '../components/svg';
import { Clouds } from '../components/svg/Clouds';
import styles from '../page-styles/home.module.css';

const Home: Component<{}> = () => {
  onMount(() => {
    setTimeout(() => document.documentElement.classList.remove('no-animate'));
  });

  const [t] = useI18n();

  return (
    <>
      <section class={styles.heroSection}>
        <h1 class={styles.title}>{t('home.title', {}, 'Hello there')}</h1>
        <h2 class={styles.subtitle}>{t('home.subtitle', {}, 'Thanks for stopping by')}</h2>
        <HeroScene class={styles.svgScene} />
        <p class={styles.intro}>{t('home.intro-paragraph', {}, "I'm George a computer science student based in Manchester.")}</p>
        <Button href="#projects" class={styles.btn}>
          {t('home.projects', {}, 'Projects')}
        </Button>
      </section>

      <section class={styles.projectSection}>
        <div class={styles.cloudWrapper}>
          <Clouds class={styles.clouds} />
          <h2 class={styles.projectTitle}>{t('home.projects', {}, 'Projects')}</h2>
        </div>
        <div class={styles.projects}>
          <article class={styles.card}>
            <h3>Card 1</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor iste nostrum voluptate, ipsam quaerat vero? Tempore ab
              mollitia incidunt adipisci. Enim, ullam placeat? Sit hic sint molestias veniam voluptatum?
            </p>
          </article>
          <article class={styles.card}>
            <h3>Card 2</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor iste nostrum voluptate, ipsam quaerat vero? Tempore ab
              mollitia incidunt adipisci. Enim, ullam placeat? Sit hic sint molestias veniam voluptatum?
            </p>
          </article>
          <article class={styles.card}>
            <h3>Card 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor iste nostrum voluptate, ipsam quaerat vero? Tempore ab
              mollitia incidunt adipisci. Enim, ullam placeat? Sit hic sint molestias veniam voluptatum?
            </p>
          </article>
        </div>
      </section>

      <section></section>
      <footer></footer>
    </>
  );
};

export default Home;

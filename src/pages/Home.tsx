import { Component, onMount } from 'solid-js';
import { Button } from '../components/Button';
import { HeroScene } from '../components/svg';
import { Clouds } from '../components/svg/Clouds';
import styles from '../page-styles/home.module.css';

const Home: Component<{}> = () => {
  onMount(() => {
    setTimeout(() => document.documentElement.classList.remove('no-animate'));
  });

  return (
    <>
      <section class={styles.homeSection}>
        <div class={styles.hero}>
          <h1 class={styles.title}>Hello there</h1>
          <h2 class={styles.subtitle}>Thanks for stopping by</h2>
          <HeroScene class={styles.svgScene} />
          <p class={styles.introText}>I&apos;m George, a computer science student based in Manchester.</p>
          <Button class={styles.btn}>Projects</Button>
        </div>
        <Clouds class={styles.clouds} />
      </section>
      <section></section>
      <section></section>
      <footer></footer>
    </>
  );
};

export default Home;

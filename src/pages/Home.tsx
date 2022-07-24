import { useI18n } from '@solid-primitives/i18n';
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer';
import { Accessor, Component, Index, onMount } from 'solid-js';
import { Button } from '../components/Button';
import { Card, CardProps } from '../components/Card';
import { HeroScene } from '../components/svg';
import { FullPageCloudGroup1, FullPageCloudGroup2 } from '../components/svg/Clouds';
import { useSpotify } from '../hooks/useSpotify';
import styles from '../page-styles/home.module.css';

const Home: Component<{}> = () => {
  let previousY = 0;
  const { add: intersectionObserver } = makeIntersectionObserver(
    [],
    ([entry]) => {
      const currentY = entry.boundingClientRect.y;
      if (entry.isIntersecting) {
        // Scroll down into area
        entry.target.classList.add('animate-now');
      } else if (currentY >= previousY) {
        // Scroll up out of area
        entry.target.classList.remove('animate-now');
      }
      previousY = currentY;
    },
    { threshold: 0.4 },
  );

  onMount(() => {
    setTimeout(() => document.documentElement.classList.remove('no-animate'));
  });

  const [t] = useI18n();

  const { currentSong, topSongs } = useSpotify();

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
          <FullPageCloudGroup1 class={styles.projectsCloud} />
          <h2 class={styles.projectTitle}>{t('home.projects', {}, 'Projects')}</h2>
        </div>
        <div class={styles.projects}>
          <Index each={t('home.project-cards', {})}>
            {(data: Accessor<Omit<CardProps, 'index'>>, i) => <Card index={i + 1} {...data()} />}
          </Index>
        </div>
      </section>

      <section class={styles.aboutSection}>
        <div use:intersectionObserver class={styles.cloudWrapper}>
          <FullPageCloudGroup2 />
        </div>
        <div class={styles.aboutContent}>
          <h2 class={styles.aboutTitle}>{t('home.about', {}, 'About Me')}</h2>
          <div>
            <h3>Academic</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia vitae omnis officiis fugit, sed tempora
              voluptatibus libero velit minus. Cum est nostrum delectus, placeat dicta quo ex obcaecati. Necessitatibus.
            </p>
            <h3>Experience</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia vitae omnis officiis fugit, sed tempora
              voluptatibus libero velit minus. Cum est nostrum delectus, placeat dicta quo ex obcaecati. Necessitatibus.
            </p>
            <h3>Interests</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia vitae omnis officiis fugit, sed tempora
              voluptatibus libero velit minus. Cum est nostrum delectus, placeat dicta quo ex obcaecati. Necessitatibus.
            </p>
          </div>
          <div>
            <h3>Spotify</h3>
            <p>See what my current top songs are (updated daily!)</p>
            <ol>
              <li>song 1</li>
              <li>song 2</li>
              <li>song 3</li>
              <li>song 4</li>
              <li>song 5</li>
              <li>song 6</li>
              <li>song 7</li>
              <li>song 8</li>
              <li>song 9</li>
              <li>song 10</li>
            </ol>
            <p>Currently listening to:</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

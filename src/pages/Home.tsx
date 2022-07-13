import { useI18n } from '@solid-primitives/i18n';
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer';
import { Component, onMount } from 'solid-js';
import { Button } from '../components/Button';
import { FooterScene, HeroScene } from '../components/svg';
import { FullPageCloudGroup1, FullPageCloudGroup2 } from '../components/svg/Clouds';
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
          <FullPageCloudGroup1 />
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

      <section class={styles.aboutSection}>
        <div use:intersectionObserver class={styles.cloudWrapper}>
          <FullPageCloudGroup2 />
        </div>
        <div class={styles.aboutContent}>
          <h2 class={styles.aboutTitle}>{t('home.about', {}, 'About Me')}</h2>
          <div>
            <h3>Summary</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia vitae omnis officiis fugit, sed tempora
              voluptatibus libero velit minus. Cum est nostrum delectus, placeat dicta quo ex obcaecati. Necessitatibus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia vitae omnis officiis fugit, sed tempora
              voluptatibus libero velit minus. Cum est nostrum delectus, placeat dicta quo ex obcaecati. Necessitatibus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia vitae omnis officiis fugit, sed tempora
              voluptatibus libero velit minus. Cum est nostrum delectus, placeat dicta quo ex obcaecati. Necessitatibus.
            </p>
          </div>
          <div>
            <h3>Spotify</h3>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <footer>
        <FooterScene />
      </footer>
    </>
  );
};

export default Home;

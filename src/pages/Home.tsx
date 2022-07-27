import { useI18n } from '@solid-primitives/i18n';
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer';
import { Accessor, Component, Index, Suspense } from 'solid-js';
import { TransitionButton } from '../components/Button';
import { Card, CardProps, SpotifyCard } from '../components/Card';
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

  const [t] = useI18n();
  const { currentSong, topSongs } = useSpotify();

  return (
    <>
      <section class={styles.heroSection} id="hero">
        <h1 class={styles.title}>{t('home.title', {}, 'Hello there')}</h1>
        <h2 class={styles.subtitle}>{t('home.subtitle', {}, 'Thanks for stopping by')}</h2>
        <HeroScene class={styles.svgScene} />
        <p class={styles.intro}>{t('home.intro-paragraph', {}, "I'm George a computer science student based in Manchester.")}</p>
        <TransitionButton href="#projects" class={styles.btn}>
          {t('home.projects', {}, 'Projects')}
        </TransitionButton>
      </section>

      <section class={styles.projectSection}>
        <div class={styles.cloudWrapper}>
          <FullPageCloudGroup1 class={styles.projectsCloud} />
          <h2 class={styles.projectTitle}>{t('home.projects', {}, 'Projects')}</h2>
        </div>
        <div class={styles.projects} id="projects">
          <Index each={t('home.project-cards', {})}>
            {(data: Accessor<Omit<CardProps, 'index'>>, i) => <Card index={i + 1} {...data()} />}
          </Index>
        </div>
      </section>

      <section class={styles.aboutSection} id="about-me">
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
            <ol class={styles.spotifyList}>
              <Suspense fallback={<p>Loading...</p>}>
                <Index each={topSongs()?.tracks.slice(0, 9)}>
                  {(track, i) => {
                    const ORIGINS = ['0%', '50%', '100%'];
                    return (
                      <li style={{ 'transform-origin': `${ORIGINS[i % 3]} ${ORIGINS[Math.floor(i / 3)]}` }}>
                        <SpotifyCard {...track()} />
                      </li>
                    );
                  }}
                </Index>
              </Suspense>
            </ol>
            <p>Currently listening to:</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import { useI18n } from '@solid-primitives/i18n';
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer';
import { Accessor, Component, For, Index, Suspense } from 'solid-js';
import { Button, TransitionButton } from '../components/Button';
import { ProjectCard, ProjectCardProps, LastPlayedMediaCard, TopTrackCard } from '../components/Card';
import { HeroScene } from '../components/svg';
import { AsteroidGroup1 } from '../components/svg/Asteroids';
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
  const { mostRecentMedia, topSongs } = useSpotify();

  return (
    <>
      <section class={styles.heroSection} id="hero">
        <h1 class={styles.title}>{t('home.title', {}, 'Hello there')}</h1>
        <h2 class={styles.subtitle}>{t('home.subtitle', {}, 'Hello there')}</h2>
        <HeroScene class={styles.svgScene} />
        <p class={styles.intro}>{t('home.intro-paragraph', {}, "I'm George, a computer science student based in Manchester")}</p>
        <TransitionButton href="#projects" class={styles.btn}>
          {t('home.projects', {}, 'Projects')}
        </TransitionButton>
      </section>

      <section class={styles.projectSection}>
        <div class={styles.cloudWrapper}>
          <FullPageCloudGroup1 />
          <AsteroidGroup1 />
          <h2 class={styles.projectTitle}>{t('home.projects', {}, 'Projects')}</h2>
        </div>
        <div class={styles.projects} id="projects">
          <Index each={t('home.project-cards')}>
            {(data: Accessor<Omit<ProjectCardProps, 'index'>>, i) => <ProjectCard index={i + 1} {...data()} />}
          </Index>
        </div>
      </section>

      <section class={styles.aboutSection}>
        <div use:intersectionObserver class={styles.cloudWrapper}>
          <FullPageCloudGroup2 moveOnReduceMotion={true} />
          <AsteroidGroup1 moveOnReduceMotion={true} />
        </div>
        <div class={styles.aboutContent} id="about-me">
          <h2 class={styles.aboutTitle}>{t('home.about', {}, 'About me')}</h2>
          <div class="flow">
            <h3>{t('home.academic-title', {}, 'Academic')}</h3>
            <For each={t('home.academic-paragraphs')}>{(paragraph: string) => <p>{paragraph}</p>}</For>
            <h3>{t('home.experience-title', {}, 'Experience')}</h3>
            <For each={t('home.experience-paragraphs')}>{(paragraph: string) => <p>{paragraph}</p>}</For>
            <h3>{t('home.interests-title')}</h3>
            <For each={t('home.interests-paragraphs', {}, 'Interests')}>{(paragraph: string) => <p>{paragraph}</p>}</For>
          </div>
          <div class={styles.spotify}>
            <h3>Spotify</h3>
            <p>{t('home.spotify-tagline', {}, 'Information on my favourite songs and recent listening')}</p>
            <ol class={styles.spotifyList}>
              <Suspense fallback={<p>Loading...</p>}>
                <Index each={topSongs()}>
                  {(track, i) => {
                    const ORIGINS = ['2%', '50%', '98%'];
                    return (
                      <li style={{ 'transform-origin': `${ORIGINS[i % 3]} ${ORIGINS[Math.floor(i / 3)]}` }}>
                        <TopTrackCard {...track()} />
                      </li>
                    );
                  }}
                </Index>
              </Suspense>
            </ol>
            <Suspense fallback={<p>Loading...</p>}>
              <LastPlayedMediaCard {...mostRecentMedia()!} />
            </Suspense>
          </div>
          <TransitionButton>{t('home.cv', {}, 'View my CV')}</TransitionButton>
        </div>
      </section>
    </>
  );
};

export default Home;

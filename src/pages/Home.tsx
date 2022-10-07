import { useI18n } from '@solid-primitives/i18n';
import { Accessor, Component, For, Index, onMount, Suspense } from 'solid-js';
import { TransitionButton } from '../components/Button';
import { ProjectCard, ProjectCardProps, LastPlayedMediaCard, TopTrackCard } from '../components/Card';
import { HeroScene } from '../components/svg';
import { AsteroidGroup1 } from '../components/svg/Asteroids';
import { FullPageCloudGroup1, FullPageCloudGroup2 } from '../components/svg/Clouds';
import { useSpotify } from '../hooks/useSpotify';

import styles from '../page-styles/home.module.css';

const Home: Component<{}> = () => {
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  onMount(() => {
    const aboutSection = document.getElementById('about-section');
    const mult = matchMedia('(min-width: 40rem)').matches ? 0.75 : 0.5;
    const threshold = (mult * window?.innerHeight) / (aboutSection?.clientHeight || 1);

    let previousY = 0;
    const aboutTriggerObserver = new IntersectionObserver(
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
      { threshold },
    );

    document.querySelectorAll('section, footer').forEach((section) => animationObserver.observe(section));
    aboutSection && aboutTriggerObserver.observe(aboutSection);
  });

  const [t] = useI18n();
  const { mostRecentMedia, topSongs } = useSpotify();

  return (
    <>
      <section class={styles.heroSection} id="hero">
        <h1 class={styles.title}>{t('home.title', {}, 'Hello there')}</h1>
        <h2 class={styles.subtitle}>{t('home.subtitle', {}, 'Thanks for stopping by')}</h2>
        <HeroScene class={styles.svgScene} aria-hidden={true} />
        <p class={styles.intro}>{t('home.intro-paragraph', {}, "I'm George, a computer science student based in Manchester")}</p>
        <TransitionButton href="#about-me" class={styles.btn}>
          {t('home.about-me', {}, 'About Me')}
        </TransitionButton>
      </section>

      <section class={styles.projectSection} id="projects">
        <div class={styles.cloudWrapper}>
          <FullPageCloudGroup1 aria-hidden={true} />
          <AsteroidGroup1 aria-hidden={true} />
          <h2 class={styles.projectTitle}>{t('home.projects', {}, 'Projects')}</h2>
        </div>
        <div class={styles.projects}>
          <Index each={t('home.project-cards')}>
            {(data: Accessor<Omit<ProjectCardProps, 'index'>>, i) => <ProjectCard index={i + 1} {...data()} />}
          </Index>
        </div>
      </section>

      <section class={styles.aboutSection} id="about-section">
        <div id="moving-wrapper" class={styles.cloudWrapper}>
          <FullPageCloudGroup2 moveOnReduceMotion={true} aria-hidden={true} />
          <AsteroidGroup1 moveOnReduceMotion={true} aria-hidden={true} />
        </div>
        <div class={styles.aboutContent} id="about-me">
          <h2 class={styles.aboutTitle}>{t('home.about', {}, 'About me')}</h2>
          <div class="flow">
            <h3>{t('home.academic-title', {}, 'Academic')}</h3>
            <For each={t('home.academic-paragraphs')}>{(paragraph: string) => <p innerHTML={paragraph} />}</For>
            <h3>{t('home.experience-title', {}, 'Experience')}</h3>
            <p innerHTML={t('home.experience-p')} />
            <ol class={styles.enigmaRoles}>
              <For each={t('home.enigma-roles')}>{(role: string) => <li innerHTML={role} />}</For>
            </ol>
            <h3>{t('home.interests-title')}</h3>
            <For each={t('home.interests-paragraphs', {}, 'Interests')}>{(paragraph: string) => <p>{paragraph}</p>}</For>
          </div>
          <div class={styles.spotify}>
            <h3>Spotify</h3>
            <p>{t('home.spotify-tagline', {}, 'Information on my favourite songs and recent listening')}</p>
            <ol class={styles.spotifyList}>
              {/* <Suspense fallback={<p>Loading...</p>}> */}
              <Index each={topSongs()}>
                {(track, i) => {
                  const ORIGINS = ['2%', '50%', '98%'];
                  return (
                    <li style={{ 'transform-origin': `${ORIGINS[i % 3]} ${ORIGINS[Math.floor(i / 3)]}`, '--a-delay': `${-i * 900}ms` }}>
                      <TopTrackCard {...track()} />
                    </li>
                  );
                }}
              </Index>
              {/* </Suspense> */}
            </ol>
            <Suspense fallback={<p>Loading...</p>}>
              <LastPlayedMediaCard {...mostRecentMedia()!} />
            </Suspense>
          </div>
          <TransitionButton href="/GeorgeGraingerCV.pdf" download={'GeorgeGraingerCV'}>
            {t('home.cv', {}, 'View my CV')}
          </TransitionButton>
        </div>
      </section>
    </>
  );
};

export default Home;

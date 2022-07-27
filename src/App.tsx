import { Router, useIsRouting, useRoutes } from 'solid-app-router';
import { onMount, Suspense, VoidComponent } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { AppContextProvider } from './AppContext';
import { TransitionLink } from './components/Button';
import { Navbar } from './components/Navbar';
import { FooterScene } from './components/svg';
import { routes } from './routes';

const App: VoidComponent<{}> = () => {
  // Should be executed once on initial page load to prevent initial animation occuring
  onMount(() => {
    setTimeout(() => document.documentElement.classList.remove('no-animate'));
  });

  // don't require clean up since will be useful throughout site use
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    document.documentElement.style.scrollBehavior = '';

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    });
  });

  const Routes = useRoutes(routes);
  return (
    <Router>
      <MetaProvider>
        <AppContextProvider>
          <Navbar />
          {/* Need to use higher order function since must be placed within Router */}
          <main classList={{ loading: useIsRouting()() }}>
            <Suspense
              fallback={
                <section>
                  <p>Loading</p>
                </section>
              }
            >
              <Routes />
            </Suspense>
          </main>
          <footer>
            <div class="footerImage">
              <FooterScene />
            </div>
            <div class="footerText">
              <strong>Preferences</strong>
              <ul role="list">
                <li>
                  <TransitionLink href="/">Test 1</TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/about-me">Test 2</TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/projects">Test 3</TransitionLink>
                </li>
              </ul>
              <strong>Created by</strong>
              <span>George Grainger</span>
            </div>
          </footer>
        </AppContextProvider>
      </MetaProvider>
    </Router>
  );
};

export default App;

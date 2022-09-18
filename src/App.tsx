import { Router, useIsRouting, useRoutes } from 'solid-app-router';
import { onMount, Suspense, VoidComponent } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { AppContextProvider } from './AppContext';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { routes } from './routes';

const App: VoidComponent<{}> = () => {
  // Should be executed once on initial page load to prevent initial animation occuring
  onMount(() => {
    setTimeout(() => document.documentElement.classList.remove('no-animate'), 300);
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
          <Footer />
        </AppContextProvider>
      </MetaProvider>
    </Router>
  );
};

export default App;

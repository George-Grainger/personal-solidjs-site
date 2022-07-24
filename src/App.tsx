import { Router, useIsRouting, useRoutes } from 'solid-app-router';
import { onMount, Suspense, VoidComponent } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { AppContextProvider } from './AppContext';
import { Navbar } from './components/Navbar';
import { FooterScene } from './components/svg';
import { routes } from './routes';

// Should be executed once on initial page load to prevent initial animation occuring
onMount(() => {
  setTimeout(() => document.documentElement.classList.remove('no-animate'));
});

const App: VoidComponent<{}> = () => {
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
          <Suspense fallback={<p>Loading</p>}>
            {/* Need to use higher order function since must be placed within Router */}
            <main classList={{ loading: useIsRouting()() }}>
              <Routes />
            </main>
            <footer>
              <FooterScene />
              <div>
                <span>Preferences</span>
                <ul role="list">
                  <li>
                    <a>Test 1</a>
                  </li>
                  <li>
                    <a>Test 2</a>
                  </li>
                  <li>
                    <a>Test 3</a>
                  </li>
                </ul>
                <span>Created by</span>
                <span>George Grainger</span>
              </div>
            </footer>
          </Suspense>
        </AppContextProvider>
      </MetaProvider>
    </Router>
  );
};

export default App;

import { Router, useRoutes } from 'solid-app-router';
import { Suspense, VoidComponent } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { AppContextProvider } from './AppContext';
import { Navbar } from './components/Navbar';
import { FooterScene } from './components/svg';
import { routes } from './routes';

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
            <main>
              {/* <TransitionRoutes> */}
              <Routes />
              {/* </TransitionRoutes> */}
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

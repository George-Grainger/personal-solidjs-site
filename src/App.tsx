import { Router, useRoutes } from 'solid-app-router';
import { Suspense, VoidComponent } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { AppContextProvider } from './AppContext';
import { Navbar } from './components/Navbar';
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
          <main>
            {/* <TransitionRoutes> */}
            <Suspense fallback={<p>Loading</p>}>
              <Routes />
            </Suspense>
            {/* </TransitionRoutes> */}
          </main>
        </AppContextProvider>
      </MetaProvider>
    </Router>
  );
};

export default App;

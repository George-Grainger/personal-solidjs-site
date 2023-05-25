import { A } from '~/locales';

export function Nav() {
  return (
    <header>
      <nav aria-label="Main">
        <ul>
          <li>
            <A href="/">Home</A>
          </li>
          <li>
            <A href="/#projects">Projects</A>
          </li>
          <li>
            <A href="/#home">About</A>
          </li>
          <li>Dark Mode</li>
          <li>Animations</li>
          <li>Lanuage</li>
        </ul>
      </nav>
    </header>
  );
}

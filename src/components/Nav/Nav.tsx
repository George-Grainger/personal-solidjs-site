import { A } from '~/locales';
import { DarkmodeToggle } from './DarkmodeToggle';

export function Nav() {
  return (
    <header>
      <nav aria-label="Main">
        <ul>
          <li>
            <A href="/">Home</A>
          </li>
          <li>
            <A href="#projects">Projects</A>
          </li>
          <li>
            <A href="#home">About</A>
          </li>
          <li>
            <DarkmodeToggle />
          </li>
          <li>Animations</li>
          <li>
            <select onChange={() => console.log('here')}>
              <option id="test" value="test">
                Test
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { NavLink, useLocation, useNavigate } from 'solid-app-router';
import { Component, JSX, ParentComponent, splitProps } from 'solid-js';
import { routes } from '../../routes';

type PreloadableComponent = Component<any> & {
  preload: () => Promise<{
    default: Component<any>;
  }>;
};

export const TransitionLink: ParentComponent<JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }> = (props) => {
  const [local, others] = splitProps(props, ['children', 'href']);

  const location = useLocation();
  const navigate = useNavigate();

  let prevTimeout: number | undefined;
  const handleClick = (e: MouseEvent) => {
    // Don't transition for links to same page
    if (local.href.startsWith('#') || local.href.includes(`${location.pathname}/#`)) {
      return true;
    }

    e.preventDefault();
    const main = document.querySelector('main') as Element;
    const delayInS = Number(getComputedStyle(main, '::before').getPropertyValue('transition-duration').replace('s', ''));

    (routes.find((route) => route.path === local.href)?.component as PreloadableComponent)?.preload();

    if (local.href !== location.pathname) {
      main?.classList.add('cover');

      setTimeout(() => {
        navigate(local.href);
      }, delayInS * 333 || 200);

      clearTimeout(prevTimeout);
      prevTimeout = setTimeout(() => {
        main?.classList.remove('cover');
      }, delayInS * 1000 || 600);
    }

    return false;
  };

  return (
    <NavLink href={local.href || '/'} {...others} onClick={handleClick}>
      {local.children}
    </NavLink>
  );
};

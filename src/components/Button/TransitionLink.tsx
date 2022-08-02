import { NavLink, useLocation, useNavigate } from 'solid-app-router';
import { Component, JSX, ParentComponent, splitProps } from 'solid-js';
import { useAppContext } from '../../AppContext';
import { routes } from '../../routes';

type PreloadableComponent = Component<any> & {
  preload: () => Promise<{
    default: Component<any>;
  }>;
};

export const TransitionLink: ParentComponent<JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }> = (props) => {
  const [local, others] = splitProps(props, ['children', 'href', 'onClick']);

  const context = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  let prevTimeout: number | undefined;
  const handleClick = (e: MouseEvent) => {
    // Run onClick method if passed as prop
    local.onClick && (local.onClick as (e: MouseEvent) => any)(e);

    // Don't transition for links to same page
    if (local.href.startsWith('#') || local.href.includes(`${location.pathname}/#`)) {
      return true;
    }

    e.preventDefault();
    const header = document.querySelector('header') as Element;
    const delayInS =
      context.isReduceMotion || header.classList.contains('no-delay')
        ? 0
        : Number(getComputedStyle(header, '::before').getPropertyValue('transition-duration').replace('s', ''));

    (routes.find((route) => route.path === local.href)?.component as PreloadableComponent)?.preload();

    if (local.href !== location.pathname) {
      header?.classList.add('cover');

      setTimeout(() => {
        navigate(local.href, { scroll: true });
      }, delayInS * 333);

      clearTimeout(prevTimeout);
      prevTimeout = setTimeout(() => {
        header?.classList.remove('cover');
      }, delayInS * 1000);
    }

    return false;
  };

  return (
    <NavLink href={local.href || '/'} {...others} end={true} onClick={handleClick}>
      {local.children}
    </NavLink>
  );
};

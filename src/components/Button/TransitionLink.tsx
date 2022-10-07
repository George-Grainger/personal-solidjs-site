import { NavLink } from '@solidjs/router';
import { JSX, ParentComponent, splitProps } from 'solid-js';

export const TransitionLink: ParentComponent<JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }> = (props) => {
  const [local, others] = splitProps(props, ['children', 'href']);

  return (
    <a href={local.href || '/'} {...others}>
      {local.children}
    </a>
  );
};

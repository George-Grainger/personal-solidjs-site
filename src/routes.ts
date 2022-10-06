import { RouteDefinition } from '@solidjs/router';
import { Component, lazy } from 'solid-js';

const lazyWithPreload = (factory: () => Promise<{ default: Component<any> }>) => {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
};

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazyWithPreload(() => import('./pages/Home')),
  },
  {
    path: '/projects',
    component: lazyWithPreload(() => import('./pages/Projects')),
  },
  {
    path: '/about-me',
    component: lazyWithPreload(() => import('./pages/About')),
  },
  {
    path: '/*all',
    component: lazyWithPreload(() => import('./pages/404')),
  },
];

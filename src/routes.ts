import { Navigate, RouteDefinition } from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import { ProjectData } from './pages/Project.data';

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
    component: () => Navigate({ href: '/#projects' }),
  },
  {
    path: ['/about', 'about-me'],
    component: () => Navigate({ href: '/#about-me' }),
  },
  {
    path: '/project/:id',
    component: () => Navigate({ href: '/projects/:id' }),
    data: ProjectData,
  },
  {
    path: '/projects/:id',
    component: lazyWithPreload(() => import('./pages/Project')),
    data: ProjectData,
  },
  {
    path: '/*all',
    component: lazyWithPreload(() => import('./pages/404')),
  },
];

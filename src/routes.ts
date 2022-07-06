import { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/projects',
    component: lazy(() => import('./pages/Projects')),
  },
  {
    path: '/about-me',
    component: lazy(() => import('./pages/About')),
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/404')),
  },
];

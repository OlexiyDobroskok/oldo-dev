export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  work: '/work',
} as const;

export type Route = typeof routes[keyof typeof routes];
export type RouteName = keyof typeof routes
export type Routes = typeof routes
import { type Route, type RouteName, routes } from '@shared/config/routes';

export const menuRoutes: { name: RouteName; path: Route }[] = [
  {
    name: 'work',
    path: routes.work,
  },
  {
    name: 'about',
    path: routes.about,
  },
  {
    name: 'contact',
    path: routes.contact,
  },
];

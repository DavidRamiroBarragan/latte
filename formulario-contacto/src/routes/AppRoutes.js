import {lazy} from 'react';
import {HOME, CONTACT, FAVORITES} from 'consts/routes';

const Contacto = lazy(() => import('views/Contacto'));
const Favoritos = lazy(() => import('views/Favoritos'));
const Home = lazy(() => import('views/Home'));
const Error404 = lazy(() => import('views/Error404'));

const routes = [
  {path: HOME, component: Home, exact: true},
  {path: CONTACT, component: Contacto, exact: true},
  {path: FAVORITES, component: Favoritos, exact: true},
  {path: '*', component: Error404}
];

export default routes;

import views from 'views';
import {HOME, LOGIN} from './paths';

export const privateRoutes = [
  {
    path: HOME,
    component: views.Home
  }
];

export const publicRoutes = [
  {
    path: LOGIN,
    component: views.Login
  }
];

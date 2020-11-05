import views from 'views';
import {HOME, LOGIN} from './paths';

export const routes = [
  {
    path: HOME,
    component: views.Home
  },
  {
    path: LOGIN,
    component: views.Login
  }
];

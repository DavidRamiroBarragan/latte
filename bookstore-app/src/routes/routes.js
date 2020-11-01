export const HOME_ROUTER = 'home';
export const LOGIN_ROUTER = 'login';

export const routes = [
  {
    path: '/',
    component: HOME_ROUTER
  },
  {
    path: `/${LOGIN_ROUTER}`,
    component: LOGIN_ROUTER
  }
];

import {lazy} from 'react';
const Home = lazy(() => 'views');
const Login = lazy(() => 'views');

export const componentFactory = {
  login: () => Login,
  home: () => Home
};

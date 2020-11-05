import {lazy} from 'react';

const Home = lazy(() => import('views/Home'));
const Login = lazy(() => import('views/Login'));

export default {
  Home,
  Login
};
  
import {lazy} from 'react';

const Home = lazy(() => import('views/Home'));
const Login = lazy(() => import('views/Login'));
const Detail = lazy(() => import('views/Detail'));

export default {
  Home,
  Login,
  Detail
};

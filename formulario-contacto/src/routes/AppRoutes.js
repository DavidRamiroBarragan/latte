import Contacto from 'views/Contacto';
import Error404 from 'views/Error404';
import Favoritos from 'views/Favoritos';
import Home from 'views/Home';

const routes = [
  {path: '/contacto', component: Contacto},
  {path: '/favoritos', component: Favoritos},
  {path: '/', component: Home},
  {path: '*', component: Error404},
];

export default routes;

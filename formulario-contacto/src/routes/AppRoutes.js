import Contacto from 'views/Contacto';
import Error404 from 'views/Error404';
import Favoritos from 'views/Favoritos';
import Home from 'views/Home';

const routes = [
  {path: '/', component: Home, exact: true},
  {path: '/contacto', component: Contacto, exact: true},
  {path: '/favoritos', component: Favoritos, exact: true},
  {path: '*', component: Error404}
];

export default routes;

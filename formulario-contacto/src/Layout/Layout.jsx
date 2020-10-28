import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from 'common/components/Header/Header';
import routes from 'routes/AppRoutes';
import {Container} from './styles';

const Layout = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback="Cargando...">
        <Container>
          <Switch>
            {routes.map((singleRoute, index) => (
              <Route {...singleRoute} key={index} />
            ))}
          </Switch>
        </Container>
      </Suspense>
    </Router>
  );
};

export default Layout;
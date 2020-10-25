import Header from 'common/components/Header/Header';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from 'routes/AppRoutes';
import {Container} from './styles';

export const Layout = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          {routes.map((singleRoute, index) => (
            <Route {...singleRoute} key={index} />
          ))}
        </Switch>
      </Container>
    </Router>
  );
};

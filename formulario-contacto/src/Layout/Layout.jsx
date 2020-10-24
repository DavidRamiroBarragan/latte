import React from "react";
import Nav from "components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "routes/AppRoutes";
import { Container } from "./styles";

export const Layout = () => {
  return (
    <Router>
      <Nav />
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

import React, {Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from 'routes/routes';
import Layout from 'components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Suspense fallback="Cargando...">
          <Switch>
            {routes.map((item) => (
              <Route path={item.path} component={item.component} key={item.path} exact />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

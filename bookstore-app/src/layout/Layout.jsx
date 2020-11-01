import React from 'react';
import {Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {componentFactory} from '../utils/componentFactory';
import {routes} from '../routes/routes';

export default function Layout({children}) {
  return (
    <BrowserRouter>
      {children}
      <Suspense fallback="Cargando...">
        <Switch>
          {routes.map((item, index) => (
            <Route
              to={item.path}
              component={componentFactory[item.component]}
              key={`${item.component}-${index}`}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

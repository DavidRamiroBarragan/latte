import React, {Suspense} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Layout from 'components/Layout';
import PrivateRoute from 'routes/components/PrivateRoute';
import PublicRoute from 'routes/components/PublicRoute';
import {privateRoutes, publicRoutes} from 'routes/routes';
import './App.css';
import AuthProvider from 'context/auth';
import {GlobalStyle} from 'styles/Global';

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <BrowserRouter>
            <Suspense fallback="Cargando...">
              <Switch>
                {publicRoutes.map((item) => (
                  <PublicRoute {...item} key={item.path} exact />
                ))}
                {privateRoutes.map((item) => (
                  <PrivateRoute {...item} key={item.path} />
                ))}
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Layout>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;

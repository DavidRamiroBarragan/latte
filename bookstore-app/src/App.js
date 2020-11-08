import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from 'components/Layout';
import PrivateRouter from 'routes/components/PrivateRouter/PrivateRouter';
import {privateRoutes, publicRoutes} from 'routes/routes';
import './App.css';
import AuthProvider from 'context/components/AuthProvider';
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
                  <Route {...item} key={item.path} exact />
                ))}
                {privateRoutes.map((item) => (
                  <PrivateRouter {...item} key={item.path} />
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

import React, {Suspense, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {privateRoutes, publicRoutes} from 'routes/routes';
import Layout from 'components/Layout';
import './App.css';
import {AuthContext} from 'context/auth';
import PrivateRouter from 'routes/components/PrivateRouter/PrivateRouter';
import {localstorageUtils} from 'utils/localStorageUtils';

function App() {
  const [authTokens, setAuthTokens] = useState(exitstingToken);
  function exitstingToken() {
    localstorageUtils.getItem('auth');
  }

  function setTokens(data) {
    localstorageUtils.setItem('auth', data);
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
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
    </AuthContext.Provider>
  );
}

export default App;

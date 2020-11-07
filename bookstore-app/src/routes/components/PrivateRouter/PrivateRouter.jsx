import {useAuth} from 'context/auth';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {LOGIN} from '../../paths.js';

const PrivateRouter = ({component: Component, ...rest}) => {
  const {authTokens} = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (authTokens ? <Component {...props} /> : <Redirect to={LOGIN} />)}
    />
  );
};

export default PrivateRouter;

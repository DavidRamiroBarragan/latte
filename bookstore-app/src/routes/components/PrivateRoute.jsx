import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';
import {LOGIN} from 'routes/paths';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to={LOGIN} />)}
    />
  );
};

export default PrivateRoute;

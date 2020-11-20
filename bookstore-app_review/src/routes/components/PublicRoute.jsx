import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';
import {HOME} from 'routes/paths';

const PublicRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Redirect to={HOME} />: <Component {...props} /> )}
    />
  );
};

export default PublicRoute;

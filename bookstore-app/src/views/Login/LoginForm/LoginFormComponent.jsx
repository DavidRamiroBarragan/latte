import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import LoginFormSchema from 'types/LoginForm.type';
import LoginFormView from './LoginFormView';
import {Redirect} from 'react-router-dom';
import {HOME} from 'routes/paths';
import useAuth from 'hooks/useAuth';

function LoginFormComponent() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const {handleSubmit, errors, register} = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema)
  });

  const {setTokens: setAuthTokens, isAuthenticated} = useAuth();

  function onSubmit(data) {
    setAuthTokens(data.text);
    setLoggedIn(true);
  }

  useEffect(() => {
    if (isAuthenticated) {
      setLoggedIn(true);
    }
  }, [isAuthenticated]);

  if (isLoggedIn) {
    return <Redirect to={HOME} />;
  }

  return <LoginFormView errors={errors} onSubmit={handleSubmit(onSubmit)} register={register} />;
}

export default LoginFormComponent;

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import LoginFormSchema from 'types/LoginForm.type';
import LoginFormView from './LoginFormView';
import {useAuth} from 'context/auth';
import {Redirect} from 'react-router-dom';
import {HOME} from 'routes/paths';

function LoginFormComponent() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const {handleSubmit, errors, register} = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema)
  });

  const {setAuthTokens} = useAuth();
  function onSubmit(data) {
    setAuthTokens(data.text);
    setLoggedIn(true);
  }

  if (isLoggedIn) {
    return <Redirect to={HOME} />;
  }

  return <LoginFormView errors={errors} onSubmit={handleSubmit(onSubmit)} register={register} />;
}

export default LoginFormComponent;

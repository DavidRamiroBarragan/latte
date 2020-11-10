import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import LoginFormSchema from 'types/LoginForm.type';
import LoginFormView from './LoginFormView';
import useAuthContext from 'hooks/useAuthContext';

function LoginFormComponent() {
  const {handleSubmit, errors, register} = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema)
  });

  const {login} = useAuthContext();

  function onSubmit(data) {
    login(data);
  }

  return <LoginFormView errors={errors} onSubmit={handleSubmit(onSubmit)} register={register} />;
}

export default LoginFormComponent;

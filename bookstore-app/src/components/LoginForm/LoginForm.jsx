import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import LoginFormSchema from '../../types/LoginForm.type';

function LoginForm() {
  const {handleSubmit, errors, register} = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema)
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  function onSubmit(data) {
    console.log(data);
  }
  return <LoginForm errors={errors} onSubmit={handleSubmit(onSubmit)} register={register} />;
}

export default LoginForm;

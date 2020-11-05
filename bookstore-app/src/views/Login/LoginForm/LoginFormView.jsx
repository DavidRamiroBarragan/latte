import React from 'react';
import {Form, Error} from 'components/UI/FormStyles';
import Button from 'components/UI/Button';

function LoginFormView({register, onSubmit, errors}) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="string" ref={register} name="email" id="email" />
      {errors?.email && <Error>{errors.email.message}</Error>}
      <label htmlFor="password">Password</label>
      <input type="password" ref={register} name="password" />
      {errors?.password && <Error>{errors.password.message}</Error>}
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default LoginFormView;

import React from 'react';
import {Form, Error} from '../../styles/FormStyles';

function LoginFormView({register, onSubmit, errors}) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="string" ref={register} name="email" id="email" />
      {errors?.email && <Error>{errors.email.message}</Error>}
      <label htmlFor="password">Password</label>
      <input type="password" ref={register} name="password" />
      {errors?.password && <Error>{errors.password.message}</Error>}
      <button type="submit">Login</button>
    </Form>
  );
}

export default LoginFormView;

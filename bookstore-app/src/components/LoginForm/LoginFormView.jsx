import React from 'react';

function LoginFormView({register, onSubmit, errors}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="string" ref={register} name="email" id="email" />
      {errors?.email && <p>{errors.email.message}</p>}
      <label htmlFor="password">Password</label>
      <input type="password" ref={register} name="password" />
      {errors?.password && <p>{errors.password.message}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginFormView;

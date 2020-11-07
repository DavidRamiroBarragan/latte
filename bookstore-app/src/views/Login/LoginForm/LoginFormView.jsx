import React from 'react';
import {Form, Error} from 'components/UI/FormStyles';
import Button from 'components/UI/Button';

function LoginFormView({register, onSubmit, errors}) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="text">Magic Word</label>
      <input type="password" ref={register} name="text" id="magicWord" />
      {errors?.text && <Error>{errors.text.message}</Error>}
      <Button type="submit">Try</Button>
    </Form>
  );
}

export default LoginFormView;

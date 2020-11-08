import React from 'react';
import {Form, Error} from 'components/UI/FormStyles';
import {PrimaryButton} from 'components/UI/Buttons';

function LoginFormView({register, onSubmit, errors}) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="text">Magic Word</label>
      <input type="password" ref={register} name="text" id="magicWord" />
      {errors?.text && <Error>{errors.text.message}</Error>}
      <PrimaryButton type="submit">Try</PrimaryButton>
    </Form>
  );
}

export default LoginFormView;

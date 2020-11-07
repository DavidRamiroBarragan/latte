import {object, string} from 'yup';
const LoginFormSchema = object().shape({
  text: string()
    .matches(/LIBRARY/, 'You must write the magic word')
    .required()
  // password: string()
  //   .min(8)
  //   .matches(/(?=.*[0-9])/, 'Password must contain a number.')
  //   .required()
});

export default LoginFormSchema;

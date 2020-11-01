import {object, string} from 'yup';
const LoginFormSchema = object().shape({
  email: string().email().required(),
  password: string()
    .min(8)
    .matches(/(?=.*[0-9])/, 'Password must contain a number.')
    .required()
});

export default LoginFormSchema;

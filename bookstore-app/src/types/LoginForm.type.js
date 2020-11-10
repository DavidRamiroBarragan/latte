import {object, string} from 'yup';
const LoginFormSchema = object().shape({
  text: string()
    .matches(/LIBRARY/, 'You must write the magic word')
    .required()
});

export default LoginFormSchema;

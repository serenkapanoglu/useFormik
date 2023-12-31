import { object, string, number, date, InferType,ref } from 'yup';

let validations = object({
    email: string().email().required(),
    password:string().min(5).required(),
    passwordConfirm:string().oneOf([ref('password')],'passwords do not match').required(),
  });

  export default validations; 
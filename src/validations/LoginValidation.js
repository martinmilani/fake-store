import {object, string} from "yup";

export const loginSchema = object().shape({
  email: string().email().matches().required(),
  password: string().min(6).max(10).required(),
});

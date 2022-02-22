import {object, string, ref} from "yup";

export const registerSchema = object().shape({
  email: string().email().matches().required(),
  password: string().min(6).max(10).required(),
  passwordConfirmation: string().oneOf([ref("password"), null], "Passwords must match"),
});

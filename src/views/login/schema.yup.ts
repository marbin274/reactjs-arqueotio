import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Ingrese el usuario"),
  password: yup
    .string()
    .required("Ingrese el password")
    // eslint-disable-next-line
    .min(6, "Campo debe tener al menos ${min} caracteres"),
});

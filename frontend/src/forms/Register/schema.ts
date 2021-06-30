import * as Yup from 'yup'

const requiredMessage = 'Este campo é obrigatório!'

export const RegisterSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'O login precisa ter no mínimo 2 caracteres!')
    .max(50, 'Login muito longo (acima de 50 caracteres)')
    .required(requiredMessage),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
    .max(50, 'Senha muito longa (acima de 50 caracteres)')
    .required(requiredMessage),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais!')
    .required('Este campo é obrigatório!'),
  name: Yup.string()
    .min(2, 'O nome deve ter no mínimo 2 caracteres!')
    .max(50, 'Nome muito longo (acima de 50 caracteres)')
    .required(requiredMessage),
  cpf: Yup.string()
    .min(11, 'CPF inválido!')
    .max(11, 'CPF inválido!')
    .required(requiredMessage),
  rg: Yup.string()
    .required(requiredMessage),
  birthday: Yup.date()
    .required(requiredMessage),
  phone: Yup.string()
    .required(requiredMessage)
})

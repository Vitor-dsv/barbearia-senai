import * as Yup from 'yup'

const requiredMessage = 'Este campo é obrigatório!'

export const CustomerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'O nome deve ter no mínimo 2 caracteres!')
    .max(50, 'Nome muito longo (acima de 50 caracteres)')
    .required(requiredMessage),
  cpf: Yup.string()
    .required(requiredMessage),
  rg: Yup.string()
    .required(requiredMessage),
  birthday: Yup.date()
    .required(requiredMessage)
    .nullable(),
  phone: Yup.string()
    .required(requiredMessage),
  state: Yup.string()
    .required(requiredMessage),
  street: Yup.string()
    .required(requiredMessage),
  neighborhood: Yup.string()
    .required(requiredMessage),
  city: Yup.string()
    .required(requiredMessage),
  number: Yup.string()
    .required(requiredMessage),
  complement: Yup.string()
    .required(requiredMessage),
  cep: Yup.string()
    .required(requiredMessage)
})

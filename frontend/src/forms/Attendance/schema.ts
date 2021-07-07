import * as Yup from 'yup'

const requiredMessage = 'Este campo é obrigatório!'

export const AttendanceSchema = Yup.object().shape({
  datetime: Yup.date()
    .required(requiredMessage)
    .nullable(),
  haircut: Yup.number()
    .required(requiredMessage)
    .nullable(),
  customer: Yup.number()
    .required(requiredMessage)
    .nullable(),
  user: Yup.number()
    .required(requiredMessage)
    .nullable()
})

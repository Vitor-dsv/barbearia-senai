import * as Yup from 'yup'

export const HaircutSchema = Yup.object().shape({
  description: Yup.string().required('Informe a descrição!'),
  price: Yup.string().required('Informe o preço!'),
  duration: Yup.string().required('Informe a duração!')
})

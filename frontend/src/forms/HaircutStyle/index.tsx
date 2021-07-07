import React from 'react'
import { InputText } from 'primereact/inputtext'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import HaircutTypeService from '../../services/HaircutType/HaircutTypeService'
import { useValidateInput } from '../../hooks/useValidateInput'
import { classNames } from 'primereact/utils'
import { HaircutSchema } from './schema'
import { InputMask } from 'primereact/inputmask'

const HaircutTypeForm = ({ haircut, haircuts, setHaircuts, onHide }: any) => {
  const handleSubmit = async (values: any) => {
    try {
      if (haircut?.id) {
        const data = await HaircutTypeService.update({ id: haircut.id, ...values })
        const filteredHaircuts = haircuts.filter((haircut: any) => haircut.id !== data.id)
        setHaircuts([data, ...filteredHaircuts])
        onHide()
      } else {
        const data = await HaircutTypeService.create(values)
        setHaircuts([data, ...haircuts])
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      description: haircut?.descricao || '',
      price: haircut?.preco || '',
      duration: haircut?.duracao || ''
    },
    validationSchema: HaircutSchema,
    onSubmit: handleSubmit
  })

  const { isFormFieldValid, getFormErrorMessage } = useValidateInput(formik)

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-field p-col-12 p-md-12">
          <span className="p-float-label">
            <InputText
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('description') })}
            />
            <label htmlFor="description">Descrição</label>
          </span>
          <small className="p-error">{getFormErrorMessage('description')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('price') })}
            />
            <label htmlFor="price">Preço</label>
          </span>
          <small className="p-error">{getFormErrorMessage('price')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputMask
              mask="99:99"
              id="duration"
              value={formik.values.duration}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('duration') })}
            />
            <label htmlFor="duration">Duração</label>
          </span>
          <small className="p-error">{getFormErrorMessage('duration')}</small>
        </div>
        <div className="p-col-4">
        </div>
        <div className="p-col-4">
          <Button label="Salvar" />
        </div>
      </div>
    </form>
  )
}

export default HaircutTypeForm

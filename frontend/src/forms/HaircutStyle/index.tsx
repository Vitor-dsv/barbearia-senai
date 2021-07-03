import React from 'react'
import { InputText } from 'primereact/inputtext'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import HaircutTypeService from '../../services/HaircutType/HaircutTypeService'

const HaircutTypeForm = ({ haircut }: any) => {
  const handleSubmit = async (values: any) => {
    try {
      if (haircut?.id) {
        await HaircutTypeService.update({ id: haircut.id, ...values })
      } else {
        await HaircutTypeService.create(values)
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
    onSubmit: handleSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <label htmlFor="description">Descrição</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <label htmlFor="price">Preço</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="duration"
              value={formik.values.duration}
              onChange={formik.handleChange}
            />
            <label htmlFor="duration">Preço</label>
          </span>
        </div>
        <div className="p-col-12">
          <Button label="Salvar" />
        </div>
      </div>
    </form>
  )
}

export default HaircutTypeForm

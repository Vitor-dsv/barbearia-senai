import React from 'react'
// import { InputText } from 'primereact/inputtext'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import CustomerService from '../../services/Customer/CustomerService'
import { Calendar } from 'primereact/calendar'
import moment from 'moment'

const CustomerForm = ({ customer, customers, setCustomers, onHide }: any) => {
  const handleSubmit = async (values: any) => {
    try {
      if (customer?.id) {
        const data = await CustomerService.update({ id: customer.id, ...values })
        const filteredCustomers = customers.filter((customer: any) => customer.id !== data.id)
        setCustomers([data, ...filteredCustomers])
        onHide()
      } else {
        const data = await CustomerService.create(values)
        setCustomers([...customers, data])
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: customer?.pessoa?.nome || '',
      cpf: customer?.pessoa?.cpf || '',
      birthday: new Date(moment(customer?.pessoa?.data_nascimento).format('DD/MM/YYYY HH:mm')) || null,
      rg: customer?.pessoa?.rg || '',
      phone: customer?.pessoa?.telefone || '',
      state: customer?.pessoa?.endereco?.estado || '',
      city: customer?.pessoa?.endereco?.cidade || '',
      neighborhood: customer?.pessoa?.endereco?.bairro || '',
      street: customer?.pessoa?.endereco?.rua || '',
      number: customer?.pessoa?.endereco?.numero || '',
      complement: customer?.pessoa?.endereco?.complemento || '',
      cep: customer?.pessoa?.endereco?.cep || ''
    },
    onSubmit: handleSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <label htmlFor="name">Nome</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
            />
            <label htmlFor="cpf">CPF</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Calendar
              id="birthday"
              value={formik.values.birthday}
              onChange={formik.handleChange}
            />
            <label htmlFor="birthday">Data de nascimento</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="rg"
              value={formik.values.rg}
              onChange={formik.handleChange}
            />
            <label htmlFor="rg">RG</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <label htmlFor="phone">Telefone</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="state"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
            <label htmlFor="state">Estado</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            <label htmlFor="city">Cidade</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="neighborhood"
              value={formik.values.neighborhood}
              onChange={formik.handleChange}
            />
            <label htmlFor="neighborhood">Bairro</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="street"
              value={formik.values.street}
              onChange={formik.handleChange}
            />
            <label htmlFor="street">Rua</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
            <label htmlFor="number">Número</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="complement"
              value={formik.values.complement}
              onChange={formik.handleChange}
            />
            <label htmlFor="complement">Complemento</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="cep"
              value={formik.values.cep}
              onChange={formik.handleChange}
            />
            <label htmlFor="cep">CEP</label>
          </span>
        </div>
        <div className="p-col-12">
          <Button label="Salvar" />
        </div>
      </div>
    </form>
  )
}

export default CustomerForm

import React from 'react'
// import { InputText } from 'primereact/inputtext'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import CustomerService from '../../services/Customer/CustomerService'
import { Calendar } from 'primereact/calendar'
import moment from 'moment'
import { CustomerSchema } from './schema'
import { useValidateInput } from '../../hooks/useValidateInput'
import { classNames } from 'primereact/utils'

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
      birthday:
        customer?.pessoa?.data_nascimento
          ? new Date(moment(customer?.pessoa?.data_nascimento).format('DD/MM/YYYY HH:mm'))
          : undefined,
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
    validationSchema: CustomerSchema,
    onSubmit: handleSubmit
  })

  const { isFormFieldValid, getFormErrorMessage } = useValidateInput(formik)

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('name') })}
            />
            <label htmlFor="name">Nome</label>
          </span>
          <small className="p-error">{getFormErrorMessage('name')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('cpf') })}
            />
            <label htmlFor="cpf">CPF</label>
          </span>
          <small className="p-error">{getFormErrorMessage('cpf')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Calendar
              id="birthday"
              value={formik.values.birthday}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('birthday') })}
            />
            <label htmlFor="birthday">Data de nascimento</label>
          </span>
          <small className="p-error">{getFormErrorMessage('birthday')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="rg"
              value={formik.values.rg}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('rg') })}
            />
            <label htmlFor="rg">RG</label>
          </span>
          <small className="p-error">{getFormErrorMessage('rg')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('phone') })}
            />
            <label htmlFor="phone">Telefone</label>
          </span>
          <small className="p-error">{getFormErrorMessage('phone')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('state') })}
            />
            <label htmlFor="state">Estado</label>
          </span>
          <small className="p-error">{getFormErrorMessage('state')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('city') })}
            />
            <label htmlFor="city">Cidade</label>
          </span>
          <small className="p-error">{getFormErrorMessage('city')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="neighborhood"
              value={formik.values.neighborhood}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('neighborhood') })}
            />
            <label htmlFor="neighborhood">Bairro</label>
          </span>
          <small className="p-error">{getFormErrorMessage('neighborhood')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="street"
              value={formik.values.street}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('street') })}
            />
            <label htmlFor="street">Rua</label>
          </span>
          <small className="p-error">{getFormErrorMessage('street')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('number') })}
            />
            <label htmlFor="number">Número</label>
          </span>
          <small className="p-error">{getFormErrorMessage('number')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="complement"
              value={formik.values.complement}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('complement') })}
            />
            <label htmlFor="complement">Complemento</label>
          </span>
          <small className="p-error">{getFormErrorMessage('complement')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="cep"
              value={formik.values.cep}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('cep') })}
            />
            <label htmlFor="cep">CEP</label>
          </span>
          <small className="p-error">{getFormErrorMessage('cep')}</small>
        </div>
        <div className="p-col-12">
          <Button label="Salvar" />
        </div>
      </div>
    </form>
  )
}

export default CustomerForm

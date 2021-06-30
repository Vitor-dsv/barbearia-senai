import React from 'react'
import { InputText } from 'primereact/inputtext'
import { InputMask } from 'primereact/inputmask'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { Calendar } from 'primereact/calendar'
import { useFormik } from 'formik'
import { RegisterSchema } from './schema'
import { useValidateInput } from '../../hooks/useValidateInput'
import { classNames } from 'primereact/utils'

const RegisterForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()

    try {
      alert('login')
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      confirmPassword: '',
      name: '',
      cpf: '',
      rg: '',
      birthday: undefined,
      phone: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: handleSubmit
  })

  const { isFormFieldValid, getFormErrorMessage } = useValidateInput(formik)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-grid p-fluid p-col-6 p-mx-auto">
        <h1 className="p-col-10 p-text-bold text">
          Cadastro
        </h1>
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('name') })}
            />
            <label htmlFor="name">Nome completo*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('name')}</small>
        </div>
        <div className="p-col-12">
          <span className="p-float-label">
            <InputMask
              id="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              mask="999.999.999-99"
              className={classNames({ 'p-invalid': isFormFieldValid('cpf') })}
              autoClear={false}
              slotChar=""
            />
            <label htmlFor="cpf">CPF*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('cpf')}</small>
        </div>
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="rg"
              value={formik.values.rg}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('rg') })}
            />
            <label htmlFor="rg">RG*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('rg')}</small>
        </div>
        <div className="p-col-12">
          <span className="p-float-label">
          <label htmlFor="icon">Icon</label>
            <Calendar
              id="birthday"
              value={formik.values.birthday}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('birthday') })}
              readOnlyInput
            />
            <label htmlFor="birthday">Data de nascimento*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('birthday')}</small>
        </div>
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('phone') })}
            />
            <label htmlFor="phone">Telefone*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('phone')}</small>
        </div>
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="login"
              value={formik.values.login}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('login') })}
            />
            <label htmlFor="login">Usuário*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('login')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Password
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              toggleMask
              feedback={false}
              className={classNames({ 'p-invalid': isFormFieldValid('password') })}
            />
            <label htmlFor="password">Senha*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('password')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Password
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              toggleMask
              feedback={false}
              className={classNames({ 'p-invalid': isFormFieldValid('confirmPassword') })}
            />
            <label htmlFor="confirmPassword">Confirme a senha*</label>
          </span>
          <small className="p-error">{getFormErrorMessage('confirmPassword')}</small>
        </div>
        <div className="p-col-9 p-my-2" />
        <div className="p-col-3 p-my-2">
          <Button label="Cadastrar" icon="pi pi-check" />
        </div>
      </div>
    </form>
  )
}

export default RegisterForm

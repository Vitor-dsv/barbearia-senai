import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { LoginSchema } from './schema'
import { useValidateInput } from '../../hooks/useValidateInput'
import { classNames } from 'primereact/utils'
import SessionService from '../../services/Session/SessionService'

const LoginForm = () => {
  const history = useHistory()
  const [rememberPassword, setRememberPassword] = useState(true)

  const handleSubmit = async (values: any) => {
    const token = await SessionService.login({ login: values.login, senha: values.password })

    if (token) {
      history.push('/usuarios')
    }
  }

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit
  })

  const { isFormFieldValid, getFormErrorMessage } = useValidateInput(formik)

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '75px' }}>
      <div className="p-grid p-fluid">
      <h1 className="p-col-10 p-text-bold text">
        Login
      </h1>
      <div className="p-col-12">
        <span className="p-float-label">
          <InputText
            id="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            className={classNames({ 'p-invalid': isFormFieldValid('login') })}
          />
          <label htmlFor="login">Usuário</label>
        </span>
        <small className="p-error">{getFormErrorMessage('login')}</small>
      </div>
      <div className="p-col-12">
        <span className="p-float-label">
          <InputText
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={classNames({ 'p-invalid': isFormFieldValid('password') })}
          />
          <label htmlFor="password">Senha</label>
        </span>
        <small className="p-error">{getFormErrorMessage('password')}</small>
      </div>
      <div className="p-col-6 p-my-2">
        <Checkbox inputId="checkbox" value={rememberPassword} onChange={() => setRememberPassword(!rememberPassword)} checked={rememberPassword} />
        <label htmlFor="checkbox" className="p-checkbox-label text" style={{ marginLeft: '6px' }}>Lembrar senha</label>
      </div>
      <div className="p-col-6 p-my-2 p-text-right">
        <Link to="/teste" style={{ textDecoration: 'none', color: 'grey' }}>Esqueceu a senha?</Link>
      </div>
      <div className="p-col-12">
        <Button label="Entrar" type="submit" />
      </div>
      </div>
    </form>
  )
}

export default LoginForm

import React from 'react'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import UserService from '../../services/User/UserService'
import UserTypeSelect from '../../components/UserTypeSelect'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { useValidateInput } from '../../hooks/useValidateInput'
import { classNames } from 'primereact/utils'
import { UserSchema } from './schema'

const UserForm = ({ user, users, setUsers, onHide }: any) => {
  const handleSubmit = async (values: any) => {
    console.log('dsas')
    try {
      if (user?.id) {
        const data = await UserService.update({ id: user.id, ...values })
        const filteredUsers = users.filter((user: any) => user.id !== data.id)
        setUsers([data, ...filteredUsers])
        onHide()
      } else {
        const data = await UserService.create(values)
        setUsers([...users, data])
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      login: user?.login || '',
      password: user?.senha || '',
      name: user?.pessoa?.nome || '',
      cpf: user?.pessoa?.cpf || '',
      birthday: user?.pessoa?.data_nascimento || null,
      rg: user?.pessoa?.rg || '',
      phone: user?.pessoa?.telefone || '',
      state: user?.pessoa?.endereco?.estado || '',
      city: user?.pessoa?.endereco?.cidade || '',
      neighborhood: user?.pessoa?.endereco?.bairro || '',
      street: user?.pessoa?.endereco?.rua || '',
      number: user?.pessoa?.endereco?.numero || '',
      complement: user?.pessoa?.endereco?.complemento || '',
      cep: user?.pessoa?.endereco?.cep || '',
      userType: user?.tipo_usuario_id || null
    },
    validationSchema: UserSchema,
    onSubmit: handleSubmit
  })

  const { isFormFieldValid, getFormErrorMessage } = useValidateInput(formik)

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="login"
              value={formik.values.login}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('login') })}
            />
            <label htmlFor="login">Login</label>
          </span>
          <small className="p-error">{getFormErrorMessage('login')}</small>
        </div>
        <div className="p-col-6">
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
        <div className="p-col-6">
          <span className="p-float-label">
            <UserTypeSelect
              id="userType"
              value={formik.values.userType}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('userType') })}
            />
            <label htmlFor="userType">Tipo</label>
          </span>
          <small className="p-error">{getFormErrorMessage('userType')}</small>
        </div>
        <div className="p-col-4">
        </div>
        <div className="p-col-4">
          <Button label="Salvar" type="submit" />
        </div>
      </div>
    </form>
  )
}

export default UserForm

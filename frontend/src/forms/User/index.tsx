import React from 'react'
// import { InputText } from 'primereact/inputtext'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import UserService from '../../services/User/UserService'
import UserTypeSelect from '../../components/UserTypeSelect'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'

const UserForm = ({ user, users, setUsers, onHide }: any) => {
  const handleSubmit = async (values: any) => {
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
    onSubmit: handleSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="login"
              value={formik.values.login}
              onChange={formik.handleChange}
            />
            <label htmlFor="login">Login</label>
          </span>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <InputText
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <label htmlFor="password">Senha</label>
          </span>
        </div>
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
        <div className="p-col-6">
          <span className="p-float-label">
            <UserTypeSelect
              id="userType"
              value={formik.values.userType}
              onChange={formik.handleChange}
            />
            <label htmlFor="userType">Tipo</label>
          </span>
        </div>
        <div className="p-col-12">
          <Button label="Salvar" />
        </div>
      </div>
    </form>
  )
}

export default UserForm

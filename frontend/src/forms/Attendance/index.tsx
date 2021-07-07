import React, { useState, useEffect } from 'react'
// import { InputText } from 'primereact/inputtext'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
// import UserService from '../../services/User/UserService'
import { Calendar } from 'primereact/calendar'
import HaircutTypeService from '../../services/HaircutType/HaircutTypeService'
import { Dropdown } from 'primereact/dropdown'
import moment from 'moment'
import CustomerService from '../../services/Customer/CustomerService'
import AttendanceService from '../../services/Attendance/AttendanceService'
import UserService from '../../services/User/UserService'
import { AttendanceSchema } from './schema'
import { classNames } from 'primereact/utils'
import { useValidateInput } from '../../hooks/useValidateInput'

const AttendanceForm = ({ attendance, attendances, setAttendances, onHide }: any) => {
  const [haircutOptions, setHaircutOptions] = useState([])
  const [customerOptions, setCustomerOptions] = useState([])
  const [usersOptions, setUsersOptions] = useState([])

  const getHaircutTypes = async () => {
    const haircutOptions = await HaircutTypeService.getAll()
    setHaircutOptions(haircutOptions)
  }

  const getCustomers = async () => {
    const customerOptions = await CustomerService.getAll()
    setCustomerOptions(customerOptions)
  }

  const getUsers = async () => {
    const customerOptions = await UserService.getAll()
    setUsersOptions(customerOptions)
  }

  useEffect(() => {
    getHaircutTypes()
    getCustomers()
    getUsers()
  }, [])

  const handleSubmit = async (values: any) => {
    try {
      if (attendance?.id) {
        const data = await AttendanceService.update({ id: attendance.id, ...values })
        const filteredAttendances = attendances.filter((attendance: any) => attendance.id !== data.id)
        setAttendances([data, ...filteredAttendances])
        onHide()
      } else {
        const data = await AttendanceService.create(values)
        setAttendances([...attendances, data])
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      datetime: new Date(moment(attendance?.data_horario).format('DD/MM/YYYY HH:mm')) || null,
      haircut: attendance?.tipoCorteCabelo?.id || null,
      customer: attendance?.cliente?.id || null,
      user: attendance?.usuario?.id || null
    },
    validationSchema: AttendanceSchema,
    onSubmit: handleSubmit
  })

  const { isFormFieldValid, getFormErrorMessage } = useValidateInput(formik)

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
      <div className="p-grid p-fluid">
        <div className="p-col-6">
          <span className="p-float-label">
            <Calendar
              id="datetime"
              value={formik.values.datetime}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('datetime') })}
              showTime
            />
            <label htmlFor="datetime">Data e horário</label>
          </span>
          <small className="p-error">{getFormErrorMessage('datetime')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Dropdown
              id="haircut"
              options={haircutOptions}
              optionLabel="descricao"
              optionValue="id"
              value={formik.values.haircut}
              onChange={formik.handleChange}
              showClear={true}
              className={classNames({ 'p-invalid': isFormFieldValid('haircut') })}
            />
            <label htmlFor="userType">Tipo do corte</label>
          </span>
          <small className="p-error">{getFormErrorMessage('haircut')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Dropdown
              id="customer"
              options={customerOptions}
              optionLabel="pessoa.nome"
              optionValue="id"
              value={formik.values.customer}
              onChange={formik.handleChange}
              showClear={true}
              className={classNames({ 'p-invalid': isFormFieldValid('customer') })}
            />
            <label htmlFor="userType">Cliente</label>
          </span>
          <small className="p-error">{getFormErrorMessage('customer')}</small>
        </div>
        <div className="p-col-6">
          <span className="p-float-label">
            <Dropdown
              id="user"
              options={usersOptions}
              optionLabel="pessoa.nome"
              optionValue="id"
              value={formik.values.user}
              onChange={formik.handleChange}
              showClear={true}
              className={classNames({ 'p-invalid': isFormFieldValid('user') })}
            />
            <label htmlFor="userType">Barbeiro</label>
          </span>
          <small className="p-error">{getFormErrorMessage('user')}</small>
        </div>
        <div className="p-col-12">
          <Button label="Salvar" />
        </div>
      </div>
    </form>
  )
}

export default AttendanceForm

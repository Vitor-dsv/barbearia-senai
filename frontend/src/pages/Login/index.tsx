import React from 'react'
import LoginForm from '../../forms/Login'

const Login = () => {
  return (
    <div className="p-grid p-fluid">
      <div className="p-col-4" />
      <div className="p-col-4">
        <LoginForm />
      </div>
      <div className="p-col-4" />
    </div>
  )
}

export default Login

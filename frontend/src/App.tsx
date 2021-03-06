// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import HaircutStyle from './pages/HaircutType'
import User from './pages/User'
import Attendance from './pages/Attendance'
import Customer from './pages/Customer'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { login } from './redux/session/actions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(login())
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/cortes" exact><HaircutStyle /></PrivateRoute>
        <PrivateRoute path="/usuarios" exact><User /></PrivateRoute>
        <PrivateRoute path="/atendimentos" exact><Attendance /></PrivateRoute>
        <PrivateRoute path="/clientes" exact><Customer /></PrivateRoute>
        <PrivateRoute path="/home" exact><Home /></PrivateRoute>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Navbar from '../Navbar'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../redux/session/reducer'

const PrivateRoute = (props: any) => {
  const user = useSelector((state: State) => state.session.user)

  if (!user.id) {
    localStorage.removeItem('token')
    location.href = '/login'
  }

  return (
    <Route {...props}>
      <Navbar />
      {props.children}
    </Route>
  )
}

export default PrivateRoute

import React from 'react'
import Navbar from '../Navbar'
import { Route } from 'react-router-dom'

const PrivateRoute = (props: any) => {
  return (
    <Route {...props}>
      <Navbar />
      {props.children}
    </Route>
  )
}

export default PrivateRoute

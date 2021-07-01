// eslint-disable-next-line no-use-before-define
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro" component={Register} exact />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

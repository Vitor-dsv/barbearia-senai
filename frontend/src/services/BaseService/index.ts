import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
}, (error) => {
  console.log(error)
  if (error.response.status === 401) {
    console.log('AAAAAAAAA')
    localStorage.removeItem('token')
    const history = useHistory()
    history.push('/login')
  }
  return error
})

class BaseService {
    protected static api = api
}

export default BaseService

import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    location.href = '/login'
    localStorage.removeItem('token')
  }
  return error
})

class BaseService {
    protected static api = api
}

export default BaseService

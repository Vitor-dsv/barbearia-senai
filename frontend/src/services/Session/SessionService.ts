import BaseService, { api } from '../BaseService'

class SessionService extends BaseService {
  public static async login ({ login, senha }: any) {
    const response = await this.api.post('/usuario/login', {
      login,
      senha
    })

    const { token } = response.data

    if (token) {
      localStorage.setItem('token', token)
    }

    return token
  }

  public static async getLoggedUser (): Promise<any> {
    const response = await api.get('usuario-logado')

    return response.data
  }
}

export default SessionService

import BaseService from '../BaseService'

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
}

export default SessionService

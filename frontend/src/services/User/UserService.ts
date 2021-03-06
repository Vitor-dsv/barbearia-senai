import BaseService from '../BaseService'
import moment from 'moment'

class UserService extends BaseService {
  public static async getAll () {
    const response = await this.api.get('usuarios')

    return response.data
  }

  // public static async getById (id: number) {
  //   const response = await this.api.get(`${this.resource}/${id}`)

  //   return response.data
  // }

  public static async create (data: any) {
    const response = await this.api.post('usuario', {
      tipo_usuario_id: data.userType,
      login: data.login,
      senha: data.password,
      foto: '',
      pessoa: {
        nome: data.name,
        cpf: data.cpf,
        data_nascimento: moment(data.birthday).format('YYYY-MM-DD'),
        rg: data.rg,
        telefone: data.phone,
        endereco: {
          estado: data.state,
          cidade: data.city,
          bairro: data.neighborhood,
          rua: data.street,
          numero: data.number,
          complemento: data.complement,
          cep: data.cep
        }
      }
    })

    return response.data
  }

  public static async update (data: any) {
    const response = await this.api.put('usuario', {
      id: data.id,
      tipo_usuario_id: data.userType,
      login: data.login,
      senha: data.password,
      foto: '',
      pessoa: {
        nome: data.name,
        cpf: data.cpf,
        data_nascimento: moment(data.birthday).format('YYYY-MM-DD'),
        rg: data.rg,
        telefone: data.phone,
        endereco: {
          estado: data.state,
          cidade: data.city,
          bairro: data.neighborhood,
          rua: data.street,
          numero: data.number,
          complemento: data.complement,
          cep: data.cep
        }
      }
    })

    return response.data
  }

  public static async delete (id: number) {
    const response = await this.api.delete(`usuario/${id}`)

    return response.data
  }
}

export default UserService

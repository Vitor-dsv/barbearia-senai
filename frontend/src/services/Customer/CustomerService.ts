import BaseService from '../BaseService'

class CustomerService extends BaseService {
  public static async getAll () {
    const response = await this.api.get('clientes')

    return response.data
  }

  // public static async getById (id: number) {
  //   const response = await this.api.get(`${this.resource}/${id}`)

  //   return response.data
  // }

  public static async create (data: any) {
    const response = await this.api.post('cliente', {
      pessoa: {
        nome: data.name,
        cpf: data.cpf,
        data_nascimento: data.birthday,
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

  public static async update (data:any) {
    const response = await this.api.put('cliente', data)

    return response.data
  }

  public static async delete (id: number) {
    const response = await this.api.delete(`cliente/${id}`)

    return response.data
  }
}

export default CustomerService

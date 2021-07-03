import BaseService from '../BaseService'

class HaircutTypeService extends BaseService {
  public static async getAll () {
    const response = await this.api.get('tipo-corte-cabelos')

    return response.data
  }

  public static async create (data: any) {
    const response = await this.api.post('tipo-corte-cabelo', {
      descricao: data.description,
      duracao: data.duration,
      preco: data.price
    })

    return response.data
  }

  public static async update (data:any) {
    const response = await this.api.put('tipo-corte-cabelo', {
      descricao: data.description,
      duracao: data.duration,
      preco: data.price,
      id: data.id
    })

    return response.data
  }

  public static async delete (id: number) {
    const response = await this.api.delete(`tipo-corte-cabelo/${id}`)

    return response.data
  }
}

export default HaircutTypeService

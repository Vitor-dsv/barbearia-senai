import BaseService from '../BaseService'

class AttendanceService extends BaseService {
  public static async getAll () {
    const response = await this.api.get('atendimentos')

    return response.data
  }

  // public static async getById (id: number) {
  //   const response = await this.api.get(`${this.resource}/${id}`)

  //   return response.data
  // }

  public static async create (data: any) {
    const response = await this.api.post('atendimento', {
      data_horario: data.datetime,
      tipoCorteCabeloId: data.haircut,
      clienteId: data.customer,
      usuarioId: data.user
    })

    return response.data
  }

  public static async update (data: any) {
    const response = await this.api.put('atendimento', {
      id: data.id,
      data_horario: data.datetime,
      tipoCorteCabeloId: data.haircut,
      clienteId: data.customer,
      usuarioId: data.user
    })

    return response.data
  }

  public static async delete (id: number) {
    const response = await this.api.delete(`atendimento/${id}`)

    return response.data
  }
}

export default AttendanceService

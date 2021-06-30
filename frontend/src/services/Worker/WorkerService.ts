import BaseService from '../BaseService'

class WorkerService extends BaseService {
  private static resource = '/barbeiros'

  public static async getAll () {
    const response = await this.api.get(this.resource)

    return response.data
  }

  public static async getById (id: number) {
    const response = await this.api.get(`${this.resource}/${id}`)

    return response.data
  }

  public static async create (data: any) {
    const response = await this.api.post(this.resource, data)

    return response.data
  }

  public static async update (id: number, data:any) {
    const response = await this.api.put(`${this.resource}/${id}`, data)

    return response.data
  }

  public static async delete (id: number) {
    const response = await this.api.delete(this.resource)

    return response.data
  }
}

export default WorkerService

import BaseService from '../BaseService'

class UserTypeService extends BaseService {
  private static resource = 'tipo-usuarios'

  public static async getAll () {
    const response = await this.api.get(this.resource)

    return response.data
  }
}

export default UserTypeService

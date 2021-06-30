import TipoUsuariosRepository from 'App/Repositories/TipoUsuariosRepository'
import TipoUsuario from 'App/Models/TipoUsuario'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class TipoUsuariosService {
  constructor(private readonly _baseRepository: TipoUsuariosRepository) {}

  public async createOrUpdate(item: TipoUsuario): Promise<TipoUsuario> {
    const tipoUsuario = new TipoUsuario().merge(item)

    return (await this._baseRepository.createOrUpdate(tipoUsuario)) as TipoUsuario
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<TipoUsuario[]> {
    return (await this._baseRepository.find()) as TipoUsuario[]
  }

  public async findOne(id: number): Promise<TipoUsuario> {
    return (await this._baseRepository.findOne(id)) as TipoUsuario
  }
}

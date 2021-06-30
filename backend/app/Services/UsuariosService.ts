import UsuariosRepository from 'App/Repositories/UsuariosRepository'
import Usuario from 'App/Models/Usuario'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class UsuariosService {
  constructor(private readonly _baseRepository: UsuariosRepository) {}

  public async createOrUpdate(item: Usuario): Promise<Usuario> {
    const usuario = new Usuario().merge(item)

    return (await this._baseRepository.createOrUpdate(usuario)) as Usuario
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Usuario[]> {
    return (await this._baseRepository.find()) as Usuario[]
  }

  public async findOne(id: number): Promise<Usuario> {
    return (await this._baseRepository.findOne(id)) as Usuario
  }
}

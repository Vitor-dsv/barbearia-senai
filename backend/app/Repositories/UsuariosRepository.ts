import { BaseRepository } from 'App/Generic/GenericRepository/BaseRepository'
import Usuario from 'App/Models/Usuario'

export default class UsuariosRepository extends BaseRepository {
  constructor() {
    super(Usuario)
  }

  public async getAll() {
    const usuarios = await Usuario.query()
      .preload('pessoa', (query) => {
        query.preload('endereco')
      })
      .preload('tipoUsuario')

    return usuarios
  }

  public async getTypeBarbeiro(): Promise<Usuario[]> {
    const usuarios = await Usuario.query()
      .where('tipoUsuarioId', 3)
      .preload('pessoa', (query) => {
        query.preload('endereco')
      })
      .preload('tipoUsuario')

    return usuarios
  }
}

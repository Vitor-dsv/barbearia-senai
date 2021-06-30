import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import TipoUsuario from 'App/Models/TipoUsuario'

export default class TipoUsuariosRepository extends BaseRepository {
  constructor() {
    super(TipoUsuario)
  }
}

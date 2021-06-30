import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import Usuario from 'App/Models/Usuario'

export default class UsuariosRepository extends BaseRepository {
  constructor() {
    super(Usuario)
  }
}

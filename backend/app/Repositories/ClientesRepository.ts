import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import Cliente from 'App/Models/Cliente'

export default class ClientesRepository extends BaseRepository {
  constructor() {
    super(Cliente)
  }
}

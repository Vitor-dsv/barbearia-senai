import { BaseRepository } from 'App/Generic/GenericRepository/BaseRepository'
import Cliente from 'App/Models/Cliente'

export default class ClientesRepository extends BaseRepository {
  constructor() {
    super(Cliente)
  }
}

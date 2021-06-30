import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import CorteCabelo from 'App/Models/CorteCabelo'

export default class CorteCabelosRepository extends BaseRepository {
  constructor() {
    super(CorteCabelo)
  }
}

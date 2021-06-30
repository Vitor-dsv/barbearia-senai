import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import TipoCorteCabelo from 'App/Models/TipoCorteCabelo'

export default class TipoCorteCabelosRepository extends BaseRepository {
  constructor() {
    super(TipoCorteCabelo)
  }
}

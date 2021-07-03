import { BaseRepository } from 'App/Generic/GenericRepository/BaseRepository'
import Endereco from 'App/Models/Endereco'

export default class EnderecosRepository extends BaseRepository {
  constructor() {
    super(Endereco)
  }
}

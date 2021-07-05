import { BaseRepository } from 'App/Generic/GenericRepository/BaseRepository'
import Pessoa from 'App/Models/Pessoa'

export default class PessoasRepository extends BaseRepository {
  constructor() {
    super(Pessoa)
  }

  public async getAll(): Promise<Pessoa[]> {
    const result = await Pessoa.query().preload('endereco')

    return result
  }
}

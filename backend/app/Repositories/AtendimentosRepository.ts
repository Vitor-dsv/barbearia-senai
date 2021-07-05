import { BaseRepository } from 'App/Generic/GenericRepository/BaseRepository'
import Atendimento from 'App/Models/Atendimento'

export default class AtendimentoRepository extends BaseRepository {
  constructor() {
    super(Atendimento)
  }

  public async getAll() {
    const atendimentos = await Atendimento.query()
      .preload('tipoCorteCabelo')
      .preload('cliente', (query) => query.preload('pessoa'))
      .preload('usuario', (query) => query.preload('pessoa'))

    return atendimentos
  }
}

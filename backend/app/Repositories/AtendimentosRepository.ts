import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import Atendimento from 'App/Models/Atendimento'

export default class AtendimentoRepository extends BaseRepository {
  constructor() {
    super(Atendimento)
  }
}

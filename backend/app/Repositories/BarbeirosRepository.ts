import { BaseRepository } from 'App/GenericRepository/BaseRepository'
import Barbeiro from 'App/Models/Barbeiro'

export default class BarbeirosRepository extends BaseRepository {
  constructor() {
    super(Barbeiro)
  }
}

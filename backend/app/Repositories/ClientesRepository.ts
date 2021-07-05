import { BaseRepository } from 'App/Generic/GenericRepository/BaseRepository'
import Cliente from 'App/Models/Cliente'

export default class ClientesRepository extends BaseRepository {
  constructor() {
    super(Cliente)
  }

  public async getAll(): Promise<Cliente[]> {
    const clientes = await Cliente.query().preload('pessoa', (query) => {
      query.preload('endereco')
    })

    return clientes
  }
}

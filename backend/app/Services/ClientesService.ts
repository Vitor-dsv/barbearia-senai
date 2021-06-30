import ClientesRepository from 'App/Repositories/ClientesRepository'
import Cliente from 'App/Models/Cliente'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class ClientesService {
  constructor(private readonly _baseRepository: ClientesRepository) {}

  public async createOrUpdate(item: Cliente): Promise<Cliente> {
    const cliente = new Cliente().merge(item)

    return (await this._baseRepository.createOrUpdate(cliente)) as Cliente
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Cliente[]> {
    return (await this._baseRepository.find()) as Cliente[]
  }

  public async findOne(id: number): Promise<Cliente> {
    return (await this._baseRepository.findOne(id)) as Cliente
  }
}

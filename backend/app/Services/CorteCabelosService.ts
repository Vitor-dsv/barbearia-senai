import CorteCabelosRepository from 'App/Repositories/CorteCabelosRepository'
import CorteCabelo from 'App/Models/CorteCabelo'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class CorteCabelosService {
  constructor(private readonly _baseRepository: CorteCabelosRepository) {}

  public async createOrUpdate(item: CorteCabelo): Promise<CorteCabelo> {
    const corteCabelo = new CorteCabelo().merge(item)

    return (await this._baseRepository.createOrUpdate(corteCabelo)) as CorteCabelo
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<CorteCabelo[]> {
    return (await this._baseRepository.find()) as CorteCabelo[]
  }

  public async findOne(id: number): Promise<CorteCabelo> {
    return (await this._baseRepository.findOne(id)) as CorteCabelo
  }
}

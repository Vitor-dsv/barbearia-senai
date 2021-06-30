import TipoCorteCabelosRepository from 'App/Repositories/TipoCorteCabelosRepository'
import TipoCorteCabelo from 'App/Models/TipoCorteCabelo'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class TipoCorteCabelosService {
  constructor(private readonly _baseRepository: TipoCorteCabelosRepository) {}

  public async createOrUpdate(item: TipoCorteCabelo): Promise<TipoCorteCabelo> {
    const tipoCorte = new TipoCorteCabelo().merge(item)

    return (await this._baseRepository.createOrUpdate(tipoCorte)) as TipoCorteCabelo
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<TipoCorteCabelo[]> {
    return (await this._baseRepository.find()) as TipoCorteCabelo[]
  }

  public async findOne(id: number): Promise<TipoCorteCabelo> {
    return (await this._baseRepository.findOne(id)) as TipoCorteCabelo
  }
}

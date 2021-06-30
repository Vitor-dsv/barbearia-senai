import BarbeirosRepository from 'App/Repositories/BarbeirosRepository'
import Barbeiro from 'App/Models/Barbeiro'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class BarbeirosService {
  constructor(private readonly _baseRepository: BarbeirosRepository) {}

  public async createOrUpdate(item: Barbeiro): Promise<Barbeiro> {
    return (await this._baseRepository.createOrUpdate(item)) as Barbeiro
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Barbeiro[]> {
    return (await this._baseRepository.find()) as Barbeiro[]
  }

  public async findOne(id: number): Promise<Barbeiro> {
    return (await this._baseRepository.findOne(id)) as Barbeiro
  }
}

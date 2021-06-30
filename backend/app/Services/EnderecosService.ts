import EnderecosRepository from 'App/Repositories/EnderecosRepository'
import Endereco from 'App/Models/Endereco'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class EnderecosService {
  constructor(public _baseRepository: EnderecosRepository) {}

  public async createOrUpdate(item: Endereco): Promise<Endereco> {
    const endereco = new Endereco().merge(item)

    return (await this._baseRepository.createOrUpdate(endereco)) as Endereco
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Endereco[]> {
    return (await this._baseRepository.find()) as Endereco[]
  }

  public async findOne(id: number): Promise<Endereco> {
    return (await this._baseRepository.findOne(id)) as Endereco
  }
}

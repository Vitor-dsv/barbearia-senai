import AtendimentosRepository from 'App/Repositories/AtendimentosRepository'
import Atendimento from 'App/Models/Atendimento'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class AtendimentosService {
  constructor(private readonly _baseRepository: AtendimentosRepository) {}

  public async createOrUpdate(item: Atendimento): Promise<Atendimento> {
    const atendimento = new Atendimento().merge(item)

    return (await this._baseRepository.createOrUpdate(atendimento)) as Atendimento
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Atendimento[]> {
    return (await this._baseRepository.getAll()) as Atendimento[]
  }

  public async findOne(id: number): Promise<Atendimento> {
    return (await this._baseRepository.findOne(id)) as Atendimento
  }
}

import AtendimentosRepository from 'App/Repositories/AtendimentosRepository'
import Atendimento from 'App/Models/Atendimento'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class AtendimentosService {
  constructor(private readonly _baseRepository: AtendimentosRepository) {}

  public async createOrUpdate(item: Atendimento): Promise<Atendimento> {
    const atendimento = new Atendimento().merge(item)

    const result = (await this._baseRepository.createOrUpdate(atendimento)) as Atendimento
    return await this.load(result)
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Atendimento[]> {
    return (await this._baseRepository.getAll()) as Atendimento[]
  }

  public async findOne(id: number): Promise<Atendimento> {
    const result = (await this._baseRepository.findOne(id)) as Atendimento
    return await this.load(result)
  }

  private async load(atendimento: Atendimento): Promise<Atendimento> {
    await atendimento.load('cliente')
    await atendimento.cliente.load('pessoa')
    await atendimento.cliente.pessoa.load('endereco')

    await atendimento.load('tipoCorteCabelo')

    await atendimento.load('usuario')
    await atendimento.usuario.load('pessoa')
    await atendimento.usuario.pessoa.load('endereco')
    await atendimento.usuario.load('tipoUsuario')

    return atendimento
  }
}

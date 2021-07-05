import PessoasRepository from 'App/Repositories/PessoasRepository'
import Pessoa from 'App/Models/Pessoa'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class PessoasService {
  constructor(private readonly _baseRepository: PessoasRepository) {}

  public async createOrUpdate(item: Pessoa): Promise<Pessoa> {
    const pessoa = new Pessoa().merge(item)

    const result = (await this._baseRepository.createOrUpdate(pessoa)) as Pessoa

    return await this.load(result)
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Pessoa[]> {
    return (await this._baseRepository.getAll()) as Pessoa[]
  }

  public async findOne(id: number): Promise<Pessoa> {
    const result = (await this._baseRepository.findOne(id)) as Pessoa
    return await this.load(result)
  }

  private async load(pessoa: Pessoa): Promise<Pessoa> {
    await pessoa.load('endereco')

    return pessoa
  }
}

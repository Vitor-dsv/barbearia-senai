import ClientesRepository from 'App/Repositories/ClientesRepository'
import Cliente from 'App/Models/Cliente'
import { autoInjectable } from 'tsyringe'
import CreateClientDto from 'App/Dtos/CreateClientDto'
import EnderecosService from './EnderecosService'
import Endereco from 'App/Models/Endereco'
import Pessoa from 'App/Models/Pessoa'
import EnderecoDto from 'App/Dtos/EnderecoDto'
import PessoaDto from 'App/Dtos/PessoaDto'

@autoInjectable()
export default class ClientesService {
  constructor(private readonly _baseRepository: ClientesRepository) {}

  public async createOrUpdate(clienteDto: CreateClientDto): Promise<Cliente> {
    const enderecoId = await this.clienteToEndereco(clienteDto.endereco)
    const pessoaId = await this.clienteToPessoa(clienteDto.pessoa, enderecoId)

    const cliente = new Cliente()
    cliente.pessoaId = pessoaId

    return (await this._baseRepository.createOrUpdate(cliente)) as Cliente
  }

  private async clienteToEndereco(endereco: EnderecoDto): Promise<number> {
    const enderecoMerge = new Endereco().merge(endereco)
    const newEndereco = await enderecoMerge.save()

    return newEndereco.id
  }

  private async clienteToPessoa(pessoa: PessoaDto, enderecoId: number): Promise<number> {
    const pessoaMerge = new Pessoa().merge(pessoa)
    pessoaMerge.enderecoId = enderecoId

    const newPessoa = await pessoaMerge.save()
    return newPessoa.id
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

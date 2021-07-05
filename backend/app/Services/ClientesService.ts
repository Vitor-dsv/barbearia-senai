import ClientesRepository from 'App/Repositories/ClientesRepository'
import Cliente from 'App/Models/Cliente'
import { autoInjectable } from 'tsyringe'
import ModifyClientDto from 'App/Dtos/ModifyClientDto'
import Endereco from 'App/Models/Endereco'
import Pessoa from 'App/Models/Pessoa'
import EnderecoDto from 'App/Dtos/EnderecoDto'
import EnderecosRepository from 'App/Repositories/EnderecosRepository'
import PessoasRepository from 'App/Repositories/PessoasRepository'
import { ModifyPessoaDto } from 'App/Dtos/ModifyPessoaDto'

@autoInjectable()
export default class ClientesService {
  constructor(
    private readonly _baseRepository: ClientesRepository,
    private readonly _enderecoRepository: EnderecosRepository,
    private readonly pessoaRepository: PessoasRepository
  ) {}

  public async createOrUpdate(clienteDto: ModifyClientDto): Promise<Cliente> {
    const enderecoId = await this.clienteToEndereco(clienteDto.pessoa.endereco)
    const pessoaId = await this.clienteToPessoa(clienteDto.pessoa, enderecoId)

    const cliente = new Cliente()

    if (clienteDto.id) cliente.id = clienteDto.id
    cliente.pessoaId = pessoaId

    const clientAdd = (await this._baseRepository.createOrUpdate(cliente)) as Cliente

    return await this.load(clientAdd)
  }

  private async clienteToEndereco(endereco: EnderecoDto): Promise<number> {
    const enderecoMerge = new Endereco().merge(endereco)
    const newEndereco = await this._enderecoRepository.createOrUpdate(enderecoMerge)

    return newEndereco.$attributes.id
  }

  private async clienteToPessoa(pessoa: ModifyPessoaDto, enderecoId: number): Promise<number> {
    const pessoaMerge = new Pessoa().merge(pessoa)
    pessoaMerge.enderecoId = enderecoId

    const newPessoa = await this.pessoaRepository.createOrUpdate(pessoaMerge)
    return newPessoa.$attributes.id
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Cliente[]> {
    return (await this._baseRepository.getAll()) as Cliente[]
  }

  public async findOne(id: number): Promise<Cliente> {
    const result = (await this._baseRepository.findOne(id)) as Cliente
    return await this.load(result)
  }

  private async load(cliente: Cliente): Promise<Cliente> {
    await cliente.load('pessoa')
    await cliente.pessoa.load('endereco')

    return cliente
  }
}

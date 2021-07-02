import UsuariosRepository from 'App/Repositories/UsuariosRepository'
import Usuario from 'App/Models/Usuario'
import { autoInjectable } from 'tsyringe'
import CreateUserDto from 'App/Dtos/CreateUserDTO'
import Endereco from 'App/Models/Endereco'
import Pessoa from 'App/Models/Pessoa'

@autoInjectable()
export default class UsuariosService {
  constructor(private readonly _baseRepository: UsuariosRepository) {}

  public async createOrUpdate(item: Usuario): Promise<Usuario> {
    const usuario = new Usuario().merge(item)

    return (await this._baseRepository.createOrUpdate(usuario)) as Usuario
  }

  // Cria a Pessoa, Endereço e o Usuario e realiza a integração entre os dados na tabela.
  public async createUserFull(item: CreateUserDto): Promise<Usuario> {
    const enderecoId = await this.usertToEndereco(item)
    const pessoaId = await this.userToPessoa(item, enderecoId)

    const usuarioAdd = new Usuario()
    usuarioAdd.merge(item.usuario)
    usuarioAdd.pessoaId = pessoaId
    usuarioAdd.tipoUsuarioId = item.idTipoUsuario

    return (await this._baseRepository.createOrUpdate(usuarioAdd)) as Usuario
  }

  // Retornar o ID do Endereco adicionando.
  private async usertToEndereco({ endereco }: CreateUserDto): Promise<number> {
    const enderecoMerge = new Endereco()
    enderecoMerge.merge(endereco)

    const newEndereco = await enderecoMerge.save()
    return newEndereco.id
  }

  // Retorar o ID da Pessoa adicionada.
  private async userToPessoa({ pessoa }: CreateUserDto, idEndereco: number): Promise<number> {
    const pessoaMerge = new Pessoa()
    pessoaMerge.merge(pessoa)
    pessoaMerge.enderecoId = idEndereco

    const newPessoa = await pessoaMerge.save()
    return newPessoa.id
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Usuario[]> {
    return (await this._baseRepository.find()) as Usuario[]
  }

  public async findOne(id: number): Promise<Usuario> {
    return (await this._baseRepository.findOne(id)) as Usuario
  }
}

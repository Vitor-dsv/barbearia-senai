import UsuariosRepository from 'App/Repositories/UsuariosRepository'
import Usuario from 'App/Models/Usuario'
import { autoInjectable } from 'tsyringe'
import Endereco from 'App/Models/Endereco'
import Pessoa from 'App/Models/Pessoa'
import Database from '@ioc:Adonis/Lucid/Database'
import ModifyUserDto from 'App/Dtos/ModifyUserDto'
import EnderecosRepository from 'App/Repositories/EnderecosRepository'
import EnderecoDto from 'App/Dtos/EnderecoDto'
import PessoasRepository from 'App/Repositories/PessoasRepository'
import { ModifyPessoaDto } from 'App/Dtos/ModifyPessoaDto'

@autoInjectable()
export default class UsuariosService {
  constructor(
    private readonly _baseRepository: UsuariosRepository,
    private readonly _enderecoRepository: EnderecosRepository,
    private readonly pessoaRepository: PessoasRepository
  ) { }

  public async createOrUpdate(item: ModifyUserDto): Promise<Usuario> {
    const enderecoId = await this.userToEndereco(item.pessoa.endereco)
    const pessoaId = await this.userToPessoa(item.pessoa, enderecoId)

    const usuarioAdd = new Usuario()
    usuarioAdd.merge(item)
    usuarioAdd.pessoaId = pessoaId

    const usuario = (await this._baseRepository.createOrUpdate(usuarioAdd)) as Usuario

    return await this.load(usuario)
  }

  private async userToEndereco(endereco: EnderecoDto): Promise<number> {
    const enderecoMerge = new Endereco().merge(endereco)
    const newEndereco = await this._enderecoRepository.createOrUpdate(enderecoMerge)

    return newEndereco.$attributes.id
  }

  private async userToPessoa(pessoa: ModifyPessoaDto, enderecoId: number): Promise<number> {
    const pessoaMerge = new Pessoa().merge(pessoa)
    pessoaMerge.enderecoId = enderecoId

    const newPessoa = await this.pessoaRepository.createOrUpdate(pessoaMerge)
    return newPessoa.$attributes.id
  }

  public async delete(id: number): Promise<Number> {
    return await this._baseRepository.delete(id)
  }

  public async find(): Promise<Usuario[]> {
    return await this._baseRepository.getAll()
  }

  public async findOne(id: number): Promise<Usuario> {
    const usuario = (await this._baseRepository.findOne(id)) as Usuario

    await usuario.load('tipoUsuario')
    await usuario.load('pessoa', (query) => query.preload('endereco'))

    return await this.load(usuario)
  }

  public async findTypeBarbeiro(): Promise<Usuario[]> {
    return await this._baseRepository.getTypeBarbeiro()
  }

  public async validUser(credenciais: { login: string; senha: string }): Promise<boolean> {
    const usuario =
      (
        await Database.from('usuario')
          .where('login', '=', credenciais.login)
          .andWhere('senha', '=', credenciais.senha)
      ).length > 0

    return usuario
  }

  private async load(usuario: Usuario): Promise<Usuario> {
    await usuario.load('pessoa')
    await usuario.pessoa.load('endereco')
    await usuario.load('tipoUsuario')

    return usuario
  }
}

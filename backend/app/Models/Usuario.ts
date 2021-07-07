import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TipoUsuario from './TipoUsuario'
import Pessoa from './Pessoa'
import Hash from '@ioc:Adonis/Core/Hash'
import { beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  public static table = 'usuario'

  @column({ isPrimary: true })
  public id: number

  @column()
  public login: String

  @column()
  public senha: String

  @column()
  public foto: String

  @column({ columnName: 'tipo_usuario_id' })
  public tipoUsuarioId: number

  @belongsTo(() => TipoUsuario, { foreignKey: 'tipoUsuarioId' })
  public tipoUsuario: BelongsTo<typeof TipoUsuario>

  @column({ columnName: 'pessoa_id' })
  public pessoaId: number

  @belongsTo(() => Pessoa, { foreignKey: 'pessoaId' })
  public pessoa: BelongsTo<typeof Pessoa>

  @beforeSave()
  public static async hashPassword(usuario: Usuario) {
    if (usuario.$dirty.senha) {
      usuario.senha = await Hash.make(usuario.senha.toString())
    }
  }
}

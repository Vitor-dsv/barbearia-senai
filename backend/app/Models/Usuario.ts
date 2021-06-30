import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TipoUsuario from './TipoUsuario'
import Pessoa from './Pessoa'

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

  @belongsTo(() => TipoUsuario, { foreignKey: 'tipo_usuario_id' })
  public tipoUsuario: BelongsTo<typeof TipoUsuario>

  @column({ columnName: 'pessoa_id' })
  public pessoaId: number

  @belongsTo(() => Pessoa, { foreignKey: 'pessoa_id' })
  public pessoa: BelongsTo<typeof Pessoa>
}

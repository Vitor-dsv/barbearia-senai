import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pessoa from './Pessoa'

export default class Cliente extends BaseModel {
  public static table = 'cliente'

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'pessoa_id' })
  public pessoaId: number

  @belongsTo(() => Pessoa, { foreignKey: 'pessoa_id' })
  public pessoa: BelongsTo<typeof Pessoa>
}

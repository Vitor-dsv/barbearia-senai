import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pessoa from './Pessoa'

export default class Barbeiro extends BaseModel {
  public static table = 'barbeiro'

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'pessoa_id' })
  public pessoaId: number

  @belongsTo(() => Pessoa, { foreignKey: 'pessoa_id' })
  public pessoa: BelongsTo<typeof Pessoa>
}

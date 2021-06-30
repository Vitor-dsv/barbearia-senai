import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Endereco from './Endereco'

export default class Pessoa extends BaseModel {
  public static table = 'pessoa'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String

  @column()
  public cpf: String

  @column({ columnName: 'data_nascimento' })
  public dataNascimento: Date

  @column()
  public rg: String

  @column()
  public telefone: String

  @column({ columnName: 'endereco_id' })
  public enderecoId: number

  @belongsTo(() => Endereco, { foreignKey: 'endereco_id' })
  public endereco: BelongsTo<typeof Endereco>
}

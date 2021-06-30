import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Endereco extends BaseModel {
  public static table = 'endereco'

  @column({ isPrimary: true })
  public id: number

  @column()
  public estado: String

  @column()
  public cidade: String

  @column()
  public bairro: String

  @column()
  public rua: String

  @column()
  public numero: String

  @column()
  public complemento: String

  @column()
  public cep: String
}

import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoCorteCabelo extends BaseModel {
  public static table = 'tipo_corte_cabelo'

  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: String

  @column()
  public preco: Number

  @column()
  public duracao: Number
}

import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoUsuario extends BaseModel {
  public static table = 'tipo_usuario'

  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: String
}

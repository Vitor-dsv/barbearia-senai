import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TipoCorteCabelo from './TipoCorteCabelo'
import Cliente from './Cliente'

export default class CorteCabelo extends BaseModel {
  public static table = 'corte_cabelo'

  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public data_horario: DateTime

  @column({ columnName: 'tipo_corte_cabelo_id' })
  public tipoCorteCabeloId: number

  @belongsTo(() => TipoCorteCabelo, { foreignKey: 'tipo_corte_cabelo_id' })
  public tipoCorteCabelo: BelongsTo<typeof TipoCorteCabelo>

  @column({ columnName: 'cliente_id' })
  public clienteId: number

  @belongsTo(() => Cliente, { foreignKey: 'cliente_id' })
  public cliente: BelongsTo<typeof Cliente>
}

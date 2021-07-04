import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TipoCorteCabelo from './TipoCorteCabelo'
import Cliente from './Cliente'
import Usuario from './Usuario'

export default class Atendimento extends BaseModel {
  public static table = 'atendimento'

  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public data_horario: DateTime

  @column({ columnName: 'tipo_corte_cabelo_id' })
  public tipoCorteCabeloId: number

  @belongsTo(() => TipoCorteCabelo, { foreignKey: 'tipoCorteCabeloId' })
  public tipoCorteCabelo: BelongsTo<typeof TipoCorteCabelo>

  @column({ columnName: 'cliente_id' })
  public clienteId: number

  @belongsTo(() => Cliente, { foreignKey: 'clienteId' })
  public cliente: BelongsTo<typeof Cliente>

  @column({ columnName: 'usuario_id' })
  public usuarioId: number

  @belongsTo(() => Usuario, { foreignKey: 'usuarioId' })
  public usuario: BelongsTo<typeof Usuario>
}

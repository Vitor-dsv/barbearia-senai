import { LucidRow } from '@ioc:Adonis/Lucid/Orm'

export interface Write {
  createOrUpdate(item: LucidRow): Promise<LucidRow>
  delete(id: number): Promise<Number>
}

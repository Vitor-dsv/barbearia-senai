import { LucidRow } from '@ioc:Adonis/Lucid/Orm'

export interface Read {
  find(): Promise<LucidRow[]>
  findOne(id: number): Promise<LucidRow>
}

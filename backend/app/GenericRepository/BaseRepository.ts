import { Read } from './Read'
import { Write } from './Write'
import { BaseModel, LucidRow } from '@ioc:Adonis/Lucid/Orm'

export abstract class BaseRepository implements Write, Read {
  public readonly _baseModel: typeof BaseModel

  constructor(base: typeof BaseModel) {
    this._baseModel = base
  }

  public async createOrUpdate(item: LucidRow): Promise<LucidRow> {
    try {
      const id = item.$getAttribute('id')
      let itemSave: LucidRow

      if (id) {
        const newItem = await this._baseModel.findOrFail(id)
        itemSave = newItem.merge(item)
      } else {
        itemSave = item
      }

      return await item.save()
    } catch (error) {
      throw new Error(
        `Houve um erro ao criar ou atualizar o registro. Erro: ${(error as Error).message}`
      )
    }
  }

  public async delete(id: number): Promise<Number> {
    try {
      const item = await this._baseModel.findOrFail(id)
      await item.delete()

      return id
    } catch (error) {
      throw new Error(`Houve um erro ao buscar o registro. Erro: ${(error as Error).message}`)
    }
  }

  public async find(): Promise<LucidRow[]> {
    const result = await this._baseModel.all()

    return result
  }

  public async findOne(id: number): Promise<LucidRow> {
    try {
      const result = await this._baseModel.findOrFail(id)

      return result
    } catch (error) {
      throw new Error(`Houve um erro ao buscar o registro. Erro: ${(error as Error).message}`)
    }
  }
}

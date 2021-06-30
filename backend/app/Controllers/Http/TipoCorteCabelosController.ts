import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BaseController } from 'App/GenericControllers/BaseController'
import TipoCorteCabelo from 'App/Models/TipoCorteCabelo'
import TipoCorteCabelosService from 'App/Services/TipoCorteCabelosService'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class TipoCorteCabelosController implements BaseController {
  constructor(public _service: TipoCorteCabelosService) {}

  public async index({ response }: HttpContextContract) {
    const result = await this._service.find()

    response.json(result)
  }

  public async findOne({ params, response }: HttpContextContract) {
    const id = params.id

    if (id) {
      const result = await this._service.findOne(+id)
      response.json(result)
    } else {
      throw new Error('ID do registro não encontrado.')
    }
  }

  async create({ request, response }: HttpContextContract) {
    const tipoCorteCabelo = request.body() as TipoCorteCabelo

    const result = await this._service.createOrUpdate(tipoCorteCabelo)
    response.json(result)
  }

  async update({ request, response }: HttpContextContract) {
    const tipoCorteCabelo = request.body() as TipoCorteCabelo

    const result = await this._service.createOrUpdate(tipoCorteCabelo)
    response.json(result)
  }

  async delete({ params, response }: HttpContextContract) {
    const id = params.id

    const result = await this._service.delete(id)
    response.json(result)
  }
}

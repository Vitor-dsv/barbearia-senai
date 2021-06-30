import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BaseController } from 'App/GenericControllers/BaseController'
import Endereco from 'App/Models/Endereco'
import EnderecosService from 'App/Services/EnderecosService'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class EnderecosController implements BaseController {
  constructor(public _service: EnderecosService) {}

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
    const endereco = request.body() as Endereco

    const result = await this._service.createOrUpdate(endereco)
    response.json(result)
  }

  async update({ request, response }: HttpContextContract) {
    const endereco = request.body() as Endereco

    const result = await this._service.createOrUpdate(endereco)
    response.json(result)
  }

  async delete({ params, response }: HttpContextContract) {
    const id = params.id

    const result = await this._service.delete(id)
    response.json(result)
  }
}

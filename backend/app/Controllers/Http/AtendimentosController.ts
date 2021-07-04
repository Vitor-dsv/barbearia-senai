import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BaseController } from 'App/Generic/GenericControllers/BaseController'
import Atendimento from 'App/Models/Atendimento'
import AtendimentosService from 'App/Services/AtendimentosService'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class AtendimentosController implements BaseController {
  constructor(public _service: AtendimentosService) {}

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
    const atendimento = request.body() as Atendimento

    const result = await this._service.createOrUpdate(atendimento)
    response.json(result)
  }

  async update({ request, response }: HttpContextContract) {
    const atendimento = request.body() as Atendimento

    const result = await this._service.createOrUpdate(atendimento)
    response.json(result)
  }

  async delete({ params, response }: HttpContextContract) {
    const id = params.id

    const result = await this._service.delete(id)
    response.json(result)
  }
}

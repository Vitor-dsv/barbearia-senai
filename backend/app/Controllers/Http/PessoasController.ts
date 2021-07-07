import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BaseController } from 'App/Generic/GenericControllers/BaseController'
import Pessoa from 'App/Models/Pessoa'
import PessoasService from 'App/Services/PessoasService'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class PessoasController implements BaseController {
  constructor(public _service: PessoasService) { }

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
    const pessoa = request.body() as Pessoa

    const result = await this._service.createOrUpdate(pessoa)
    response.json(result)
  }

  async update({ request, response }: HttpContextContract) {
    const pessoa = request.body() as Pessoa

    const result = await this._service.createOrUpdate(pessoa)
    response.json(result)
  }

  async delete({ params, response }: HttpContextContract) {
    const id = params.id

    const result = await this._service.delete(id)
    response.json(result)
  }
}

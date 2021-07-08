import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ModifyUserDto from 'App/Dtos/ModifyUserDto'
import { BaseController } from 'App/Generic/GenericControllers/BaseController'
import UsuariosService from 'App/Services/UsuariosService'
import { autoInjectable } from 'tsyringe'

@autoInjectable()
export default class UsuariosController implements BaseController {
  constructor(public _service: UsuariosService) {}

  public async index({ response }: HttpContextContract) {
    const result = await this._service.find()

    response.json(result)
  }

  public async login({ request, auth }: HttpContextContract) {
    const { login, senha } = request.only(['login', 'senha'])
    const token = await auth.use('api').attempt(login, senha)

    return token.toJSON()
  }

  public loggedUser({ auth, response }: HttpContextContract) {
    return response.ok(auth.user)
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

  public async findTypeBarbeiro({ response }: HttpContextContract) {
    const result = await this._service.findTypeBarbeiro()

    response.json(result)
  }

  async create({ request, response }: HttpContextContract) {
    const usuario = request.body() as ModifyUserDto

    const result = await this._service.createOrUpdate(usuario)
    response.json(result)
  }

  async update({ request, response }: HttpContextContract) {
    const usuario = request.body() as ModifyUserDto

    const result = await this._service.createOrUpdate(usuario)
    response.json(result)
  }

  async delete({ params, response }: HttpContextContract) {
    const id = params.id

    const result = await this._service.delete(id)
    response.json(result)
  }

  async validUser({ params, response }: HttpContextContract) {
    const login = params.login
    const senha = params.senha

    const result = await this._service.validUser({ login, senha })

    if (result) {
      // await auth.use('basic').authenticate()
      // response.json(auth.user)
    } else {
      response.json('aaaaa')
    }
  }
}

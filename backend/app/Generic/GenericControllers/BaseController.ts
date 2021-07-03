import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export interface BaseController {
  index({ request, response }: HttpContextContract): Promise<void>
  findOne({ params, response }: HttpContextContract): Promise<void>
  create({ request, response }: HttpContextContract): Promise<void>
  update({ request, response }: HttpContextContract): Promise<void>
  delete({ params, response }: HttpContextContract): Promise<void>
}

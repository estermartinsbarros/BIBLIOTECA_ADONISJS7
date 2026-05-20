import type { HttpContext } from '@adonisjs/core/http'
import Lib from '#models/lib'
import { createLibValidator, updateLibValidator } from '#validators/lib'

export default class LibsController {
  async index({ auth }: HttpContext) {
    const user = auth.user!
    const libs = await Lib.query().where('user_id', user.id)
    return libs
  }

  async show({ auth, params, response }: HttpContext) {
    const user = auth.user!
    const lib = await Lib.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .first()

    if (!lib) {
      return response.status(404).json({ error: 'Livro não encontrado' })
    }
    return lib
  }

  async store({ auth, request }: HttpContext) {
    const user = auth.user!
    const data = await request.validateUsing(createLibValidator)
    const lib = await Lib.create({
      ...data,
      userId: user.id,
    })
    return lib
  }

  async update({ auth, params, request, response }: HttpContext) {
    const user = auth.user!
    const lib = await Lib.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .first()

    if (!lib) {
      return response.status(404).json({ error: 'Livro não encontrado' })
    }

    const data = await request.validateUsing(updateLibValidator)
    lib.merge(data)
    await lib.save()
    return lib
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.user!
    const lib = await Lib.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .first()

    if (!lib) {
      return response.status(404).json({ error: 'Livro não encontrado' })
    }

    await lib.delete()
    return response.status(200).json({ message: 'Livro removido com sucesso' })
  }
}

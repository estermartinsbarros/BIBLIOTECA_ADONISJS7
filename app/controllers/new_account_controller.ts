import User from '#models/user'
import { registerValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class NewAccountController {
  async store({ request, response }: HttpContext) {
    const { nome, email, password } =
      await request.validateUsing(registerValidator)

    const user = await User.create({
      name: nome,
      email,
      password,
    })

    const token = await User.accessTokens.create(user)

    return response.status(201).json({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }
}
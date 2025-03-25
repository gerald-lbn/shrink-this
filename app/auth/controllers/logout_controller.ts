import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class LogoutController {
  async handle({ auth, response }: HttpContext) {
    // Log the user out
    await auth.use('web').logout()

    // Redirect to the login page
    return response.redirect().toRoute(
      'login.render',
      {},
      {
        domain: env.get('ADMIN_DOMAIN'),
      },
    )
  }
}

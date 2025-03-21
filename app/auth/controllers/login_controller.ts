import type { HttpContext } from '@adonisjs/core/http'
import User from '#auth/models/user'

export default class LoginController {
  async render({ inertia }: HttpContext) {
    return inertia.render('auth/login/index')
  }

  async handle({ auth, request, response }: HttpContext) {
    // Get the email and password from the request
    const { email, password } = request.only(['email', 'password'])

    // Verify the credentials
    const user = await User.verifyCredentials(email, password)

    // Login the user
    await auth.use('web').login(user)

    // Redirect to the dashboard
    return response.redirect().toRoute('dashboard.render')
  }
}

import { PasswordPwnedException } from '#auth/exceptions/password_pwned_exception'
import { UserRepository } from '#auth/repositories/user_repository'
import { HaveIBeenPwnedService } from '#auth/services/have_i_been_pwned'
import { registerValidator } from '#auth/validators/register_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async render({ inertia }: HttpContext) {
    return inertia.render('auth/register/index')
  }

  async handle({ auth, request, response }: HttpContext) {
    // Validate the request data
    const { fullName, email, password } = await request.validateUsing(registerValidator)

    // Check if the password has been pwned (i.e leaked in a data breach)
    const pwned = await HaveIBeenPwnedService.check(password)
    if (pwned) throw new PasswordPwnedException()

    // Create a new user
    const user = await UserRepository.createUser(fullName, email, password)

    // Log the user in
    await auth.use('web').login(user)

    // Redirect to the dashboard
    return response.redirect().toRoute('dashboard.render')
  }
}

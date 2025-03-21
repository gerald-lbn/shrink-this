import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export class PasswordPwnedException extends Exception {
  static status = 422
  static code = 'E_PASSWORD_PWNED'
  static message = 'This password was previously exposed in a data breach'

  async handle(error: this, ctx: HttpContext) {
    ctx.session.flashErrors({ password: error.message })
    ctx.response.redirect().back()
  }
}

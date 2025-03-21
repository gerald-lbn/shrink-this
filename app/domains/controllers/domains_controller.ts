import type { HttpContext } from '@adonisjs/core/http'

export default class DomainsController {
  async render({ inertia }: HttpContext) {
    return inertia.render('app/domains/index')
  }
}

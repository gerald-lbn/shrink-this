import type { HttpContext } from '@adonisjs/core/http'
import { UserDTO } from '#auth/dto/user_dto'
import { DomainRepository } from '#domains/repositories/domain_repository'
import { domainValidator } from '#domains/validators/domain_validator'

export default class DomainsController {
  async render({ auth, inertia, response }: HttpContext) {
    const user = auth.user
    if (!user) return response.unauthorized('Unauthorized')

    const domains = await DomainRepository.getUserDomains(user.id)
    return inertia.render('app/domains/index', {
      domains,
      user: new UserDTO(user).toJSON(),
    })
  }

  async handle({ request, response }: HttpContext) {
    const { url, userId } = await request.validateUsing(domainValidator)

    await DomainRepository.registerDomain(url, userId)

    return response.redirect().back()
  }
}

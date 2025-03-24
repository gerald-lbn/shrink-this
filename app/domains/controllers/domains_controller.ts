import type { HttpContext } from '@adonisjs/core/http'
import { UserDTO } from '#auth/dto/user_dto'
import { DomainDTO } from '#domains/dto/domain_dto'
import { DomainRepository } from '#domains/repositories/domain_repository'
import { domainValidator } from '#domains/validators/domain_validator'
import env from '#start/env'

export default class DomainsController {
  async render({ auth, inertia, response }: HttpContext) {
    const user = auth.user
    if (!user) return response.unauthorized('Unauthorized')

    const domains = await DomainRepository.getUserDomains(user.id)
    return inertia.render('app/domains/index', {
      domains: domains.map((domain) => new DomainDTO(domain).toJSON()),
      user: new UserDTO(user).toJSON(),
    })
  }

  async handle({ request, response, session }: HttpContext) {
    const { url, userId } = await request.validateUsing(domainValidator)

    if (url === env.get('ADMIN_DOMAIN'))
      session.flashErrors({
        url: 'This is a reserved domain. Please choose another one.',
      })

    await DomainRepository.registerDomain(url, userId)

    return response.redirect().back()
  }
}

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const DomainsController = () =>
  import('#domains/controllers/domains_controller')

router
  .group(() => {
    router.get('/domains', [DomainsController, 'render']).as('domains.render')
    router.post('/domains', [DomainsController, 'handle']).as('domains.handle')
  })
  .use(middleware.auth())

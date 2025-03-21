import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const DomainsController = () =>
  import('#domains/controllers/domains_controller')

router
  .get('/domains', [DomainsController, 'render'])
  .as('domains.render')
  .use(middleware.auth())

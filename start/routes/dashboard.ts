import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const DashboardController = () =>
  import('#dashboard/controllers/dashboard_controller')

router
  .get('/dashboard', [DashboardController, 'render'])
  .as('dashboard.render')
  .use(middleware.auth())

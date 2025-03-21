import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const RegisterController = () => import('#auth/controllers/register_controller')
const LogoutController = () => import('#auth/controllers/logout_controller')

router
  .group(() => {
    router.get('/register', [RegisterController, 'render']).as('register.render')
    router.post('/register', [RegisterController, 'handle']).as('register.handle')
  })
  .use(middleware.guest())

router.get('/logout', [LogoutController, 'handle']).as('logout.handle')

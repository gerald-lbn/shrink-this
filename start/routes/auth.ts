import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const RegisterController = () => import('#auth/controllers/register_controller')
const LoginController = () => import('#auth/controllers/login_controller')
const LogoutController = () => import('#auth/controllers/logout_controller')

router
  .group(() => {
    router.get('/login', [LoginController, 'render']).as('login.render')
    router.post('/login', [LoginController, 'handle']).as('login.handle')

    router.get('/register', [RegisterController, 'render']).as('register.render')
    router.post('/register', [RegisterController, 'handle']).as('register.handle')
  })
  .use(middleware.guest())

router.get('/logout', [LogoutController, 'handle']).as('logout.handle')

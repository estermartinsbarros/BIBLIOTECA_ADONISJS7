import AuthController from '#controllers/auth_users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.ts'
const LibsController = () => import('#controllers/libs_controller')

router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])

router
  .group(() => {
    router.post('/logout', [AuthController, 'logout'])

    router.get('/lib', [LibsController, 'index'])
    router.get('/lib/:id', [LibsController, 'show'])
    router.post('/lib', [LibsController, 'store'])
    router.put('/lib/:id', [LibsController, 'update'])
    router.delete('/lib/:id', [LibsController, 'destroy'])
  })
  .use(middleware.auth())

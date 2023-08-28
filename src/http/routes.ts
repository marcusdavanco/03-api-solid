import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { profile } from './controllers/profile'
import { verifyJWT } from './middlewares/verify-jwt'
import { authenticate } from './controllers/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // Authenticated
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}

import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { profile } from './controllers/profile'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', register)

  // Authenticated
  app.get('/me', profile)
}

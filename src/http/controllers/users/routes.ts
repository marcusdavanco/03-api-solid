import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { register } from './register'
import { profile } from './profile'
import { authenticate } from './authenticate'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // Authenticated
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}

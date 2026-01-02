import { FastifyInstance } from 'fastify';
import { createEvent } from '../controllers/events/create-event-controller';

export function eventsRoutes(app: FastifyInstance) {
  app.register(createEvent);
}

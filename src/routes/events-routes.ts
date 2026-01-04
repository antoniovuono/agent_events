import { FastifyInstance } from 'fastify';
import { createEvent } from '../controllers/events/create-event-controller';
import { fetchEvents } from '../controllers/events/fetch-events-controller';

export function eventsRoutes(app: FastifyInstance) {
  app.register(createEvent);
  app.register(fetchEvents);
}

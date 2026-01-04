import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { fetchEventsInMemory } from '../../repositories/events-in-memory';

export async function fetchEvents(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/events', {}, async (request, reply) => {
    const events = fetchEventsInMemory();

    return reply.status(201).send(events);
  });
}

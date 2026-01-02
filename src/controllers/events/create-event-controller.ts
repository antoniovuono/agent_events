import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod';

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/events',
    {
      schema: {
        body: z.object({
          title: z.string().min(2),
          description: z.string().min(2),
          starts_date: z.coerce.date(),
        }),
      },
    },

    async (request, reply) => {
      const { title, description, starts_date } = request.body;

      return reply.status(201).send({ title, description, starts_date });
    },
  );
}

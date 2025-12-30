import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify
  .listen({
    port: 3333,
  })
  .catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });

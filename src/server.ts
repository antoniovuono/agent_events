import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { eventsRoutes } from './routes/events-routes';

const app = Fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(eventsRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server started on port 3333!');
  });

import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import { connection } from './database/index';
import { routes } from './app/routes/index';

if (process.env.NODE_ENV !== 'test') {
  connection();
}

const app = express();

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };

import 'reflect-metadata';
import express from 'express';
import './database/index';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import { routes } from './app/routes/index';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };

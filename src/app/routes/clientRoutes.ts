import { Router } from 'express';
import { ClientController } from '../controller/ClientController';
import createValidationClient from '../validation/client/createValidationClient.ts';
import getByIdValidation from '../validation/getByIdValidation';

const clientroutes = Router();
clientroutes.post('/client', createValidationClient, new ClientController().create);
clientroutes.get('/client', new ClientController().findAll);
clientroutes.delete('/client/:id', getByIdValidation, new ClientController().delete);
clientroutes.put('/client/:id', getByIdValidation, new ClientController().update);
clientroutes.get('/client/:id', getByIdValidation, new ClientController().findById);
clientroutes.get('/client/name/:name', new ClientController().getName);

export { clientroutes };

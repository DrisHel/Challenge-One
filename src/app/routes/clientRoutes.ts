import{Router} from "express";
import { ClientController } from "../controller/ClientController";



const clientroutes = Router();
clientroutes.post("/client",new ClientController ().create);
clientroutes.get("/client", new ClientController().findAll);
clientroutes.delete("/client/:id",new ClientController().delete);
clientroutes.put("/client/:id", new ClientController().update);
clientroutes.get("/client/:id", new ClientController().findById);


export {clientroutes};
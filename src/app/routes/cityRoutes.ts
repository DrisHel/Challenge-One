import{Router} from "express";
import { CityController } from "../controller/CityController";



const citiesroutes = Router();
citiesroutes.post("/city",new CityController ().create);
citiesroutes.get("/city", new CityController().findAll);
citiesroutes.delete("/city/:id",new CityController().delete);
citiesroutes.put("/city/:id", new CityController().update);
citiesroutes.get("/city/:id", new CityController().findById);


export {citiesroutes};
import{Router} from "express";
import { CityController } from "../controller/CityController";
import createCityValidation from '../validation/city/createValidationCity.ts';
import getByIdValidation from "../validation/getByIdValidation";



const citiesroutes = Router();
citiesroutes.post("/city", createCityValidation,new CityController ().create);
citiesroutes.get("/city", new CityController().findAll);
citiesroutes.delete("/city/:id",getByIdValidation, new CityController().delete);
citiesroutes.put("/city/:id", getByIdValidation, new CityController().update);
citiesroutes.get("/city/:id", getByIdValidation, new CityController().findById);


export {citiesroutes};
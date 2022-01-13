import{Router} from "express";
import { CityController } from "../controller/CityController";


const citiesroutes = Router();
citiesroutes.post("/city",new CityController ().create);


export {citiesroutes};
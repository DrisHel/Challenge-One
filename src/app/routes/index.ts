import{Router} from "express";
import { citiesroutes } from "./cityRoutes";

const routes = Router();
routes.use(citiesroutes);

export {routes};
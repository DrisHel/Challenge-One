import{Router} from "express";
import { citiesroutes } from "./cityRoutes";
import { clientroutes } from "./clientRoutes";

const routes = Router();
routes.use(citiesroutes);
routes.use(clientroutes);

export {routes};
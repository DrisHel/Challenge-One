import { Request, Response } from "express";
import { CityService } from "../service/CityService";

const cityService = new CityService();
class CityController  {
    async create(request: Request, response:Response) {
      try {
        const result = await cityService.create(request.body);
      return response.status(201).json(result);
      } catch(error) {
        return response.status(400).json(error);
        
      }
    
    }
}        

export {CityController};
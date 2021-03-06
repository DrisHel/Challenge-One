import { Request, Response } from 'express';
import { CityService } from '../service/CityService';

const cityService = new CityService();
class CityController {
  async create(request: Request, response: Response) {
    try {
      const result = await cityService.create(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await cityService.findAll(request.query);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await cityService.delete(request.params);
      return response.status(204).json({});
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const payload = request.body;
      await cityService.update(id, payload);
      return response.status(200).json(payload);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const result = await cityService.findOne(request.params);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CityController };

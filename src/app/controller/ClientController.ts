import { Request, Response } from 'express';
import { paginatedSerialiser } from '../serializer/userSerializer';
import { ClientService } from '../service/ClientService';

const clientService = new ClientService();
class ClientController {
  async create(request: Request, response: Response) {
    try {
      const result = await clientService.create(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({ msg: error.message });
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await clientService.findAll(request.query);
      return response.status(200).json(paginatedSerialiser(result));
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await clientService.delete(request.params);
      return response.status(204).json({});
    } catch (error) {
      return response.status(400).json('Bad request');
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const payload = request.body;
      await clientService.update(id, payload);
      return response.status(200).json(payload);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const result = await clientService.findOne(request.params);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ClientController };

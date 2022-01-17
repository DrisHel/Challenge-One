import { Request, Response } from 'express';
import { ClientService } from '../service/ClientService';

const clientService = new ClientService();
class ClientController {
  async create(request: Request, response: Response) {
    try {
      const result = await clientService.create(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await clientService.findAll(request.query);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const result = await clientService.delete(request.params);
      return response.status(204).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response) {
    // está fazendo a alteração, porém não mostra o que foi alterado, retornar para ajuste.
    try {
      const { id } = request.params;
      const payload = request.body;
      const result = await clientService.update(id, payload);
      return response.status(204).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const result = await clientService.findOne(request.params);
      return response.status(204).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ClientController };

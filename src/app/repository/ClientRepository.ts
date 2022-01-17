import { getRepository } from 'typeorm';
import { Client } from '../entities/Client';

class ClientRepository {
  async create(payload) {
    const repo = getRepository(Client);
    const { name, gender, cityId, birthdate, age } = payload;
    const clients = repo.create({ name, gender, cityId, birthdate, age });
    await repo.save(clients);
    return clients;
  }

  async find(payload): Promise<[Client[], number]> {
    const repo = getRepository(Client);

    const clients = await repo.findAndCount(payload);

    return clients;
  }

  async delete(id) {
    const repo = getRepository(Client);
    const result = await repo.delete(id);
    return result;
  }

  async update(id, payload) {
    const repo = getRepository(Client);
    const result = await repo.update(id, payload);
    return result;
  }

  async findOne(id): Promise<Client | Error> {
    const repo = getRepository(Client);
    const result = await repo.findOne(id);
    return result;
  }

  async findName(name): Promise<Client | Error> {
    const repo = getRepository(Client);
    return repo.findOne(name);
  }
}

export { ClientRepository };
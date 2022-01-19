import { getConnection } from 'typeorm';
import { Client } from '../entities/Client';

class ClientRepository {
  async create(payload) {
    const repo = getConnection(process.env.NODE_ENV).getRepository(Client);
    const { name, gender, cityId, birthdate } = payload;
    const clients = repo.create({ name, gender, cityId, birthdate });
    await repo.save(clients);
    return clients;
  }

  async find(payload): Promise<[Client[], number]> {
    const repo = getConnection(process.env.NODE_ENV).getRepository(Client);

    const clients = await repo.findAndCount(payload);

    return clients;
  }

  async delete(id) {
    const repo = getConnection(process.env.NODE_ENV).getRepository(Client);
    const result = await repo.delete(id);
    return result;
  }

  async update(id, payload) {
    const repo = getConnection(process.env.NODE_ENV).getRepository(Client);
    const result = await repo.update(id, payload);
    return result;
  }

  async findOne(id): Promise<Client | Error> {
    const repo = getConnection(process.env.NODE_ENV).getRepository(Client);
    const result = await repo.findOne(id);
    return result;
  }
}

export { ClientRepository };

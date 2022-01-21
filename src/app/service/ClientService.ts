import { Client } from '../entities/Client';
import { AlreadyExists } from '../errors/AlreadyExists';
import { NotFound } from '../errors/NotFounds';
import { ClientRepository } from '../repository/ClientRepository';

const clientRepository = new ClientRepository();
const clientrepo = new ClientRepository();
class ClientService {
  async create(payload): Promise<Client | Error> {
    const { name } = payload;
    const cities = await clientrepo.findOne({
      where: {
        name
      }
    });
    if (cities) throw new AlreadyExists();
    const result = await clientRepository.create(payload);
    return result;
  }

  async findAll({ limit = 5, page = 1, ...payload }) {
    const filter = {
      take: limit,
      skip: (Number(page) - 1) * Number(limit),
      where: payload,
      relations: ['city']
    };
    const [docs, totalDocs] = await clientRepository.find(filter);
    return { docs, totalDocs, limit, totalPages: totalDocs / limit + 1, page };
  }

  async delete(payload) {
    const getClient = await this.findOne(payload);
    if (!getClient) throw new NotFound(payload);
    return clientRepository.delete(payload);
  }

  async update(id, payload) {
    const client = await clientRepository.update(id, payload);

    return client;
  }

  async findOne(id): Promise<Client | Error> {
    const client = await clientRepository.findOne(id);

    return client;
  }
}

export { ClientService };

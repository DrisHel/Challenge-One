import { Client } from '../entities/Client';
import { ClientRepository } from '../repository/ClientRepository';

const clientRepository = new ClientRepository();
class ClientService {
  async create(payload): Promise<Client | Error> {
    const result = await clientRepository.create(payload);
    return result;
  }

  async findAll({ limit = 5, page = 1, ...payload }) {
    const filter = {
      take: limit,
      skip: (Number(page) - 1) * Number(limit),
      where: payload
    };
    const [docs, totalDocs] = await clientRepository.find(filter);
    const object = { docs, totalDocs, limit, totalPages: totalDocs / limit + 1, page };
    return this.ClientServicepaginatedSerialiser(object);
  }

  ClientServicepaginatedSerialiser = ({ docs, totalDocs, limit, totalPages, page }) => ({
    client: docs,
    limit,
    total: totalDocs,
    offset: page,
    offsets: totalPages
  });

  async delete(payload) {
    const client = await clientRepository.delete(payload);

    return client;
  }

  async update(id, payload) {
    const client = await clientRepository.update(id, payload);

    return client;
  }

  async findOne(id): Promise<Client | Error> {
    const client = await clientRepository.findOne(id);

    return client;
  }

  async findN(name): Promise<Client | Error> {
    const client = await clientRepository.findName(name);

    return client;
  }
}

export { ClientService };

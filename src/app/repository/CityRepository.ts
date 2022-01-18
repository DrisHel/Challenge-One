import { getConnection } from 'typeorm';
import { City } from '../entities/City';

class CityRepository {
  async create(payload) {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);
    const { city, state } = payload;
    const cities = repo.create({ city, state });
    await repo.save(cities);
    return cities;
  }

  async find(payload): Promise<[City[], number]> {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);

    const cities = await repo.findAndCount(payload);

    return cities;
  }

  async delete(id) {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);
    const result = await repo.delete(id);
    return result;
  }

  async update(id, payload) {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);
    const result = await repo.update(id, payload);
    return result;
  }

  async findOne(id): Promise<City | Error> {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);
    const result = await repo.findOne(id);
    return result;
  }

  async findCity(city): Promise<City | Error> {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);
    const result = await repo.findOne(city);
    return result;
  }

  async findState(state): Promise<City | Error> {
    const repo = getConnection(process.env.NODE_ENV).getRepository(City);
    const result = await repo.findOne(state);
    return result;
  }
}

export { CityRepository };

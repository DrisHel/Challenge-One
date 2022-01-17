import { City } from '../entities/City';
import { CityRepository } from '../repository/CityRepository';

const cityRepository = new CityRepository();
class CityService {
  async create(payload): Promise<City | Error> {
    const result = await cityRepository.create(payload);
    return result;
  }

  async findAll({ limit = 5, page = 1, ...payload }) {
    // desestruturação das querys
    const filter = {
      take: limit,
      skip: (Number(page) - 1) * Number(limit),
      where: payload
    };

    const [docs, totalDocs] = await cityRepository.find(filter);
    const object = { docs, totalDocs, limit, totalPages: totalDocs / limit + 1, page };

    return this.CityServicepaginatedSerialiser(object);
  }

  CityServicepaginatedSerialiser = ({ docs, totalDocs, limit, totalPages, page }) => ({
    city: docs,
    limit,
    total: totalDocs,
    offset: page,
    offsets: totalPages
  });

  async delete(payload) {
    const cities = await cityRepository.delete(payload);

    return cities;
  }

  async update(id, payload) {
    const cities = await cityRepository.update(id, payload);

    return cities;
  }

  async findOne(id): Promise<City | Error> {
    const cities = await cityRepository.findOne(id);

    return cities;
  }
}

export { CityService };

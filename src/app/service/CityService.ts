import { City } from '../entities/City';
import { AlreadyExists } from '../errors/AlreadyExists';
import { NotFound } from '../errors/NotFounds';

import { CityRepository } from '../repository/CityRepository';

const cityRepository = new CityRepository();
const cityrepo = new CityRepository();
class CityService {
  async create(payload): Promise<City | Error> {
    const { city, state } = payload;
    const cities = await cityrepo.findOne({
      where: {
        city,
        state
      }
    });
    if (cities) throw new AlreadyExists();

    const result = await cityRepository.create(payload);
    return result;
  }

  async findAll({ limit = 100, page = 1, ...payload }) {
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
    const getCity = await this.findOne(payload);
    if (!getCity) throw new NotFound(payload);
    return cityRepository.delete(payload);
  }

  async update(id, payload) {
    const { city, state } = payload;
    const cities = await cityrepo.findOne({
      where: {
        city,
        state
      }
    });
    if (cities) throw new AlreadyExists();
    await cityRepository.update(id, payload);

    return cities;
  }

  async findOne(id): Promise<City | Error> {
    const cities = await cityRepository.findOne(id);

    return cities;
  }
}
export { CityService };

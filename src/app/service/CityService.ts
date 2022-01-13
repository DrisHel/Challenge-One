
import { City } from "../entities/City";
import { CityRepository } from "../repository/CityRepository";

const cityRepository = new CityRepository();
class CityService {
    async create(payload): Promise<City | Error> {
        const result = await cityRepository.create(payload);
        return result;
    }
}    

export {CityService};
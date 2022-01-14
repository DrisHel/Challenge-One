
import { City } from "../entities/City";
import { CityRepository } from "../repository/CityRepository";

const cityRepository = new CityRepository();
class CityService {
    async create(payload): Promise<City | Error> {
        const result = await cityRepository.create(payload);
        return result;
    }
    async findAll(payload){
        const cities = await cityRepository.find(payload);

        return cities;
    }

    async delete(payload){
        const cities = await cityRepository.delete(payload);

        return cities;
    }
    async update(id,payload){
        const cities = await cityRepository.update(id,payload);

        return cities;
    }

    async findOne(id):Promise <City | Error>{
        const cities = await cityRepository.findOne(id);

        return cities;
    }

}    

export {CityService};
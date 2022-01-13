import { getRepository } from "typeorm";
import { City } from "../entities/City";


class CityRepository  {
    async create(payload){
        const repo = getRepository(City);
        const{city, state} = payload;
        const cities = repo.create({city,state});
        await repo.save(cities);
        return cities;
    }
}

export {CityRepository};
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

    async find(payload):Promise <City[] | Error>{
        const repo = getRepository(City);

        const cities = await repo.find(payload);

        return cities;
    }

    async delete(id){
        const repo = getRepository(City);
        const result = await repo.delete(id);
        return result;
    }

    async update(id,payload){
        const repo = getRepository(City);
        const result = await repo.update(id,payload);
        return result;
    }

    async findOne(id):Promise <City | Error>{
        const repo = getRepository(City);
        const result = await repo.findOne(id);
        return result;
    }
}    
export {CityRepository};

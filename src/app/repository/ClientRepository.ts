import { getRepository } from "typeorm";
import { Client } from "../entities/Client";


 class ClientRepository  {
    async create(payload){
        const repo = getRepository(Client);
        const{name,gender,city_id,birthdate,age} = payload;
        const clients = repo.create({name,gender,city_id,birthdate,age});
        await repo.save(clients);
        return clients;
    }

    async find(payload):Promise <Client[] | Error>{
        const repo = getRepository(Client);

        const clients = await repo.find(payload);

        return clients;
    }

    async delete(id){
        const repo = getRepository(Client);
        const result = await repo.delete(id);
        return result;
    }

    async update(id,payload){
        const repo = getRepository(Client);
        const result = await repo.update(id,payload);
        return result;
    }

    async findOne(id):Promise <Client | Error>{
        const repo = getRepository(Client);
        const result = await repo.findOne(id);
        return result;
    }
}    
export {ClientRepository};

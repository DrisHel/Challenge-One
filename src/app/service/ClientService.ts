
import { Client } from "../entities/Client";
import { ClientRepository } from "../repository/ClientRepository";

const clientRepository = new ClientRepository();
class ClientService {
    async create(payload): Promise<Client | Error> {
        const result = await clientRepository.create(payload);
        return result;
    }
    async findAll(payload){
        const client = await clientRepository.find(payload);

        return client;
    }

    async delete(payload){
        const client = await clientRepository.delete(payload);

        return client;
    }
    async update(id,payload){
        const client = await clientRepository.update(id,payload);

        return client;
    }

    async findOne(id):Promise <Client | Error>{
        const client = await clientRepository.findOne(id);

        return client;
    }

}    

export {ClientService};
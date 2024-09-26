import { Injectable } from '@nestjs/common';
import { ClientsRepository } from '../repositories/clients.repository';
import { CreateClientDto } from '../dtos/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsRepository) {}

  findAll() {
    return this.clientsRepository.findAll();
  }

  createClient(client: CreateClientDto) {
    return this.clientsRepository.store(client);
  }
}

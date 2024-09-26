import { Repository } from 'typeorm';
import { Client } from '../entities/client.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from '../dtos/create-client.dto';

export class ClientsRepository extends Repository<Client> {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {
    super(
      clientsRepository.target,
      clientsRepository.manager,
      clientsRepository.queryRunner,
    );
  }

  async findAll() {
    return this.clientsRepository.find();
  }

  async findById(id: string) {
    return this.clientsRepository.findOneBy({
      id: id,
    });
  }

  async store(client: CreateClientDto): Promise<Client> {
    const newClient = this.clientsRepository.create(client);
    return this.clientsRepository.save(newClient);
  }
}

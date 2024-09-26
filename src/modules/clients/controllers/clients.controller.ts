import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { CreateClientDto } from '../dtos/create-client.dto';
import { Client } from '../entities/client.model';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get('/find-all')
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Post('/create')
  createClient(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.createClient(createClientDto);
  }
}

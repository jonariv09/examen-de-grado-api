import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';

describe('ControllersController', () => {
  let clients: ClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
    }).compile();

    clients = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(clients).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SalesService } from './sales.service';

describe('ServicesService', () => {
  let salesService: SalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesService],
    }).compile();

    salesService = module.get<SalesService>(SalesService);
  });

  it('should be defined', () => {
    expect(salesService).toBeDefined();
  });
});

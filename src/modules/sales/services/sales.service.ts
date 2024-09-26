import { Injectable } from '@nestjs/common';
import { SalesRepository } from '../repositories/sales.repository';
import { CreateSaleDto } from '../dtos/create-sales.dto';
import { Sale } from '../entities/sale.model';

@Injectable()
export class SalesService {
  constructor(private salesRepository: SalesRepository) {}

  findAll(): Promise<Sale[]> {
    return this.salesRepository.findAll();
  }

  createSale(createSaleDto: CreateSaleDto): Promise<Sale> {
    return this.salesRepository.store(createSaleDto);
  }
}

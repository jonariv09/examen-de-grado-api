import { Body, Controller, Get, Post } from '@nestjs/common';
import { SalesService } from '../services/sales.service';
import { CreateSaleDto } from '../dtos/create-sales.dto';
import { Sale } from '../entities/sale.model';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get('/find-all')
  findAll(): Promise<Sale[]> {
    return this.salesService.findAll();
  }

  @Post('/create')
  createSale(@Body() createSaleDto: CreateSaleDto): Promise<Sale> {
    return this.salesService.createSale(createSaleDto);
  }
}

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from '../entities/sale.model';
import { CreateSaleDto } from '../dtos/create-sales.dto';

export class SalesRepository extends Repository<Sale> {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
  ) {
    super(
      salesRepository.target,
      salesRepository.manager,
      salesRepository.queryRunner,
    );
  }

  async findAll() {
    return this.salesRepository.find();
  }

  async findById(id: string) {
    return this.salesRepository.findOneBy({
      id: id,
    });
  }

  async store(createSalesDto: CreateSaleDto) {
    const newSales = this.salesRepository.create(createSalesDto);
    return this.salesRepository.save(newSales);
  }
}

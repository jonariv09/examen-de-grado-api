import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.model';
import { CreateProductDto } from '../dtos/create-product.dto';

export class ProductsRepository extends Repository<Product> {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {
    super(
      productsRepository.target,
      productsRepository.manager,
      productsRepository.queryRunner,
    );
  }

  async findAll() {
    return this.productsRepository.find();
  }

  async findById(id: string) {
    return this.productsRepository.findOneBy({
      id: id,
    });
  }

  async store(product: CreateProductDto) {
    const newProduct = this.productsRepository.create(product);
    return this.productsRepository.save(newProduct);
  }
}

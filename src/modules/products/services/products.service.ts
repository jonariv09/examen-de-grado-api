import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../repositories/products.repository';
import { CreateProductDto } from '../dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  findAll() {
    return this.productsRepository.findAll();
  }

  createProduct(createProductDto: CreateProductDto) {
    return this.productsRepository.store(createProductDto);
  }
}

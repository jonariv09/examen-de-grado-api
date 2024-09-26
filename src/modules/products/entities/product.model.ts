import { ManyToMany } from 'typeorm';
import { ProductBase } from './product.base';
import { Sale } from '../../sales/entities/sale.model';

export class Product extends ProductBase {
  @ManyToMany(() => Sale, (sale) => sale.products)
  sales: Sale[];
}

import { ManyToMany, ManyToOne } from 'typeorm';
import { Client } from '../../clients/entities/client.model';
import { SaleBase } from './sale.base';
import { Product } from '../../products/entities/product.model';

export class Sale extends SaleBase {
  @ManyToOne(() => Client, (client) => client.sales, { eager: true })
  client: Client;

  @ManyToMany(() => Product, (product) => product.sales, { eager: true })
  products: Product[];
}

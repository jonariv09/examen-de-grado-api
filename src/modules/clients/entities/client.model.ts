import { OneToMany } from 'typeorm';
import { Sale } from '../../sales/entities/sale.model';
import { ClientBase } from './client.base';

export class Client extends ClientBase {
  @OneToMany(() => Sale, (sale) => sale.client)
  sales: Sale[];
}

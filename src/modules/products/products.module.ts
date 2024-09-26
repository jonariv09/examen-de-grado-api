import { Module } from '@nestjs/common';
import { ControllerController } from './controller/products.controller';
import { ServicesService } from './services/products.service';

@Module({
  controllers: [ControllerController],
  providers: [ServicesService]
})
export class ProductsModule {}

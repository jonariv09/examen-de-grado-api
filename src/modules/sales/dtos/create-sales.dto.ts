import { IsNumber, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsString()
  product: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  totalAmount: number;
}

import { IsDecimal, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDecimal()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  category: string;
}

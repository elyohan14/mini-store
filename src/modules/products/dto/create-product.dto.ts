import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  readonly name: string;
}

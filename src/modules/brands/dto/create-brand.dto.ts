import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  readonly name: string;
}

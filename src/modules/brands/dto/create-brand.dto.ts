import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

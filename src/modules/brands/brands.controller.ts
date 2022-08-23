import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './schemas/brand.schema';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  findAll(): Promise<Brand[]> {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brand> {
    console.log(typeof id);
    return this.brandsService.findOne(id);
  }

  @Post()
  async create(@Body() brand: CreateBrandDto): Promise<object> {
    this.brandsService.create(brand);
    return {
      message: 'This action adds a new brand',
      brand,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() brand: any): object {
    this.brandsService.update(id, brand);
    return { message: `This action updates a #${id} brand` };
  }

  @Delete(':id')
  remove(@Param('id') id: string): object {
    this.brandsService.delete(id);
    return { message: `This action removes a #${id} brand` };
  }

}

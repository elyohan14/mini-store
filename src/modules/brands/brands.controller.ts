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
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './schemas/brand.schema';
import { ParseObjectIdPipe } from '../../common/parse-objectid.pipe';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  findAll(): Promise<Brand[]> {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Brand> {
    return this.brandsService.findOne(id);
  }

  @Post()
  async create(@Body() payload: CreateBrandDto): Promise<object> {
    this.brandsService.create(payload);
    return {
      message: 'This action adds a new brand',
      payload,
    };
  }

  @Put(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() payload: UpdateBrandDto,
  ): object {
    this.brandsService.update(id, payload);
    return { message: `This action updates a #${id} brand` };
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string): object {
    this.brandsService.delete(id);
    return { message: `This action removes a #${id} brand` };
  }

}

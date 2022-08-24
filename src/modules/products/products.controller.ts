import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { ParseObjectIdPipe } from '../../common/parse-objectid.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() payload: CreateProductDto): Promise<object> {
    this.productsService.create(payload);
    return {
      message: 'This action adds a new product',
      payload,
    };
  }

  @Put(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() payload: UpdateProductDto,
  ): object {
    this.productsService.update(id, payload);
    return { message: `This action updates a #${id} product` };
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string): object {
    this.productsService.delete(id);
    return { message: `This action removes a #${id} product` };
  }

}

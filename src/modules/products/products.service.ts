import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private brandModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.brandModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.brandModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    const brand = await this.brandModel.findOne({ _id: id }).exec();
    if (!brand) {
      throw new NotFoundException('Product not found');
    }
    return brand;
  }

  async update(id: string, payload: any): Promise<Product> {
    const brand = await this.brandModel
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();

    if (!brand) {
      throw new NotFoundException('Product not found');
    }
    return brand;
  }

  async delete(id: string): Promise<Product> {
    const brand = await this.brandModel.findByIdAndRemove(id).exec();
    if (!brand) {
      throw new NotFoundException('Product not found');
    }
    return brand;
  }
}

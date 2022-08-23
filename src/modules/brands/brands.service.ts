import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandDocument } from './schemas/brand.schema';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Model } from 'mongoose';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private brandModel: Model<BrandDocument>,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const createdBrand = new this.brandModel(createBrandDto);
    return createdBrand.save();
  }

  async findAll(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async findOne(id: string): Promise<Brand> {
    const brand = await this.brandModel.findOne({ _id: id }).exec();
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return brand;
  }

  async update(id: string, payload: any): Promise<Brand> {
    const brand = await this.brandModel
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();

    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return brand;
  }

  async delete(id: string): Promise<Brand> {
    const brand = await this.brandModel.findByIdAndRemove(id).exec();
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return brand;
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsModule } from './modules/brands/brands.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

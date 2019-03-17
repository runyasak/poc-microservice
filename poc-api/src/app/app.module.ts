import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../modules/products/products.module';

const importExport = [ProductsModule];

@Module({
  imports: [...importExport],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

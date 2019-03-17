import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern({ cmd: 'products.findAll' })
  findAll(): Array<any> {
    return this.productsService.findAll();
  }
  @MessagePattern({ cmd: 'products.create' })
  create() {
    this.productsService.create();
  }
}

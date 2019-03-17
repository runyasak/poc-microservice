import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Array<any>> {
    return this.productsService.findAll();
  }
  @Post()
  async create(@Res() res) {
    await this.productsService.create();
    res.status(HttpStatus.OK).json({ success: 1 });
  }
}

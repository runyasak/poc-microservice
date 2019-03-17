import { Injectable } from '@nestjs/common';

const MOCK_PRODUCT = {
  id: Math.random()
    .toString(36)
    .substring(7),
  name: 'Super shoes',
  description: 'This is my shoes.',
  variant_1: 'Size',
  skus: [
    {
      id: '862943',
      code: 'PD00310 1',
      option_1: '44',
      price: '100.00',
      barcode: 'SHOES-001',
      status: 1,
    },
  ],
  status: 1,
};

@Injectable()
export class ProductsService {
  private readonly products: Array<any> = [];
  create() {
    this.products.push(MOCK_PRODUCT);
  }
  findAll(): Array<any> {
    return this.products;
  }
}

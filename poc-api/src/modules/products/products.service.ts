import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

const PRODUCTS_PORT = 9000;

@Injectable()
export class ProductsService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: '172.19.0.1',
      port: PRODUCTS_PORT,
    },
  })
  client: ClientProxy;

  async findAll(): Promise<Array<any>> {
    const response = await this.client.send<Array<any>>(
      { cmd: 'products.findAll' },
      {},
    );
    return response.toPromise();
  }
  async create() {
    const response = await this.client.send<Array<any>>(
      { cmd: 'products.create' },
      {},
    );
    return response.toPromise();
  }
}

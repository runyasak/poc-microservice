import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { PRODUCT_PORT, PRODUCT_HOST } from '../../../global-config'

@Injectable()
export class ProductsService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: PRODUCT_HOST,
      port: PRODUCT_PORT,
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

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const PORT = 8007;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 1000 },
  });
  await app.startAllMicroservicesAsync();
  await app.listen(PORT);
  Logger.log(`Server running on ${PORT}`, 'Bootstrap');
}
bootstrap();

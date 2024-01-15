import { NestFactory } from '@nestjs/core';
import { MainApiModule } from './main-api.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MainApiModule);
  app.useGlobalPipes(new ValidationPipe());
  // const configService = app.get(ConfigService);
  await app.listen(3000);
}
bootstrap();

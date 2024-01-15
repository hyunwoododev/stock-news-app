import { NestFactory } from '@nestjs/core';
import { AggregatorsModule } from './aggregators.module';

async function bootstrap() {
  const app = await NestFactory.create(AggregatorsModule);
  await app.listen(3000);
}
bootstrap();

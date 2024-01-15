import { NestFactory } from '@nestjs/core';
import { SummurizerModule } from './summurizer.module';

async function bootstrap() {
  const app = await NestFactory.create(SummurizerModule);
  await app.listen(3000);
}
bootstrap();

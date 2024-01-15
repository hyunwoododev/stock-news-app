import { NestFactory } from '@nestjs/core';
import { IssuerModule } from './issuer.module';

async function bootstrap() {
  const app = await NestFactory.create(IssuerModule);
  await app.listen(3000);
}
bootstrap();

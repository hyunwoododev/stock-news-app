import { NestFactory } from '@nestjs/core';
import { AggregatorsModule } from './aggregators.module';
import { RmqService } from '@app/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AggregatorsModule);

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('AGGREGATORS'));
  await app.startAllMicroservices();

  // set app to listen on port 3001
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();

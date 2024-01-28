import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(new ValidationPipe());

  /**
   * RabbitMQ Microservice를 생성하고 시작
   */
  // const rmqService = app.get<RmqService>(RmqService);
  // app.connectMicroservice<RmqOptions>(rmqService.getOptions(AUTH, true));
  // await app.startAllMicroservices();

  /**
   * PORT 환경 변수를 사용하여 서버를 시작
   */
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();

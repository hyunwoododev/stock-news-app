import { Module } from '@nestjs/common';
import { AggregatorsController } from './aggregators.controller';
import { AggregatorsService } from './aggregators.service';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_AGGREGATOR_QUEUE: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/aggregators/.env',
    }),
    RmqModule,
  ],
  controllers: [AggregatorsController],
  providers: [AggregatorsService],
})
export class AggregatorsModule {}

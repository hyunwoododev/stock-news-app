import { Module } from '@nestjs/common';
import { MainApiController } from './main-api.controller';
import { MainApiService } from './main-api.service';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { AuthModule, DatabaseModule, RmqModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AGGREGATOR } from '../../../libs/common/src/constants/services';
import { NewsRepository } from './repository/news.repository';
import { NewsSchema } from '@app/common/database/schemas/news.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
        PORT: joi.number().required(),
      }),
      envFilePath: './apps/main-api/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'News', schema: NewsSchema }]),
    RmqModule.register({ name: AGGREGATOR }),
    AuthModule,
  ],
  controllers: [MainApiController],
  providers: [MainApiService, NewsRepository],
})
export class MainApiModule {}

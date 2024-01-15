import { Module } from '@nestjs/common';
import { MainApiController } from './main-api.controller';
import { MainApiService } from './main-api.service';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
      }),
      envFilePath: './apps/main-api/.env',
    }),
    DatabaseModule,
  ],
  controllers: [MainApiController],
  providers: [MainApiService],
})
export class MainApiModule {}

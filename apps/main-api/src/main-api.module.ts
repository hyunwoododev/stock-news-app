import { Module } from '@nestjs/common';
import { MainApiController } from './main-api.controller';
import { MainApiService } from './main-api.service';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { DatabaseModule } from '@app/common';
import { UsersRepository } from './user/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
        PORT: joi.number().required(),
      }),
      envFilePath: './apps/main-api/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [MainApiController],
  providers: [MainApiService, UsersRepository],
})
export class MainApiModule {}

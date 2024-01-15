import { Module } from '@nestjs/common';
import { AggregatorsController } from './aggregators.controller';
import { AggregatorsService } from './aggregators.service';

@Module({
  imports: [],
  controllers: [AggregatorsController],
  providers: [AggregatorsService],
})
export class AggregatorsModule {}

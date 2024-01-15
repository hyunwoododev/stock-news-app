import { Module } from '@nestjs/common';
import { SummurizerController } from './summurizer.controller';
import { SummurizerService } from './summurizer.service';

@Module({
  imports: [],
  controllers: [SummurizerController],
  providers: [SummurizerService],
})
export class SummurizerModule {}

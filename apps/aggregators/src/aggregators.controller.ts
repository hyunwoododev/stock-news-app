import { Controller, Get } from '@nestjs/common';
import { AggregatorsService } from './aggregators.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class AggregatorsController {
  constructor(
    private readonly aggregatorsService: AggregatorsService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return 'hey, this is the aggregators service';
  }

  @EventPattern('news_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.aggregatorsService.aggregating(data);
    this.rmqService.ack(context);
  }
}

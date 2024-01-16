import { Controller, Get } from '@nestjs/common';
import { AggregatorsService } from './aggregators.service';

@Controller()
export class AggregatorsController {
  constructor(private readonly aggregatorsService: AggregatorsService) {}

  @Get()
  getHello(): string {
    return 'hey, this is the aggregators service';
  }
}

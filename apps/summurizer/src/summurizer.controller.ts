import { Controller, Get } from '@nestjs/common';
import { SummurizerService } from './summurizer.service';

@Controller()
export class SummurizerController {
  constructor(private readonly summurizerService: SummurizerService) {}

  @Get()
  getHello(): string {
    return this.summurizerService.getHello();
  }
}

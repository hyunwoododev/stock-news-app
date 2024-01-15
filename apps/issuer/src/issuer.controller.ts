import { Controller, Get } from '@nestjs/common';
import { IssuerService } from './issuer.service';

@Controller()
export class IssuerController {
  constructor(private readonly issuerService: IssuerService) {}

  @Get()
  getHello(): string {
    return this.issuerService.getHello();
  }
}

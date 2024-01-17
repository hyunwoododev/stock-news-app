import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AggregatorsService {
  private readonly logger = new Logger(AggregatorsService.name);

  getHello(): string {
    return 'Hello World!';
  }

  aggregating(data: any) {
    this.logger.log('aggregating...', data);
  }
}

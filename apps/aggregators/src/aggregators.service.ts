import { Injectable } from '@nestjs/common';

@Injectable()
export class AggregatorsService {
  getHello(): string {
    return 'Hello World!';
  }
}

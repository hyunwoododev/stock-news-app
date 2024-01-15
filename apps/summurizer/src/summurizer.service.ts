import { Injectable } from '@nestjs/common';

@Injectable()
export class SummurizerService {
  getHello(): string {
    return 'Hello World!';
  }
}

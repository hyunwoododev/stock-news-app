import { Test, TestingModule } from '@nestjs/testing';
import { SummurizerController } from './summurizer.controller';
import { SummurizerService } from './summurizer.service';

describe('SummurizerController', () => {
  let summurizerController: SummurizerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SummurizerController],
      providers: [SummurizerService],
    }).compile();

    summurizerController = app.get<SummurizerController>(SummurizerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(summurizerController.getHello()).toBe('Hello World!');
    });
  });
});

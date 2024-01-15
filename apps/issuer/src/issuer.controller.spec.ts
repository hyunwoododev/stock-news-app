import { Test, TestingModule } from '@nestjs/testing';
import { IssuerController } from './issuer.controller';
import { IssuerService } from './issuer.service';

describe('IssuerController', () => {
  let issuerController: IssuerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IssuerController],
      providers: [IssuerService],
    }).compile();

    issuerController = app.get<IssuerController>(IssuerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(issuerController.getHello()).toBe('Hello World!');
    });
  });
});

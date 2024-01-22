import { Test, TestingModule } from '@nestjs/testing';
import { AggregatorsController } from './aggregators.controller';
import { AggregatorsService } from './aggregators.service';

describe('AggregatorsController', () => {
  let aggregatorsController: AggregatorsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AggregatorsController],
      providers: [AggregatorsService],
    }).compile();

    aggregatorsController = app.get<AggregatorsController>(
      AggregatorsController,
    );
  });
});

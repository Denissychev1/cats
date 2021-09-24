import { Test, TestingModule } from '@nestjs/testing';
import { CatKindController } from './kind.controller';

describe('CatKindController', () => {
  let controller: CatKindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatKindController],
    }).compile();

    controller = module.get<CatKindController>(CatKindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

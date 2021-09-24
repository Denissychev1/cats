import { Test, TestingModule } from '@nestjs/testing';
import { CatKindService } from './kind.service';

describe('CatKindService', () => {
  let service: CatKindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatKindService],
    }).compile();

    service = module.get<CatKindService>(CatKindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BomItemsService } from './bom-items.service';

describe('BomItemsService', () => {
  let service: BomItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BomItemsService],
    }).compile();

    service = module.get<BomItemsService>(BomItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

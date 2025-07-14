import { Test, TestingModule } from '@nestjs/testing';
import { BomItemsController } from './bom-items.controller';
import { BomItemsService } from './bom-items.service';

describe('BomItemsController', () => {
  let controller: BomItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BomItemsController],
      providers: [BomItemsService],
    }).compile();

    controller = module.get<BomItemsController>(BomItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

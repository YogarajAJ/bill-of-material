import { Module } from '@nestjs/common';
import { BomItemsService } from './bom-items.service';
import { BomItemsController } from './bom-items.controller';

@Module({
  controllers: [BomItemsController],
  providers: [BomItemsService],
})
export class BomItemsModule {}

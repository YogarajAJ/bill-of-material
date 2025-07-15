import { Module } from '@nestjs/common';
import { BomitemService } from './bomitem.service';
import { BomitemController } from './bomitem.controller';

@Module({
  providers: [BomitemService],
  controllers: [BomitemController]
})
export class BomitemModule {}

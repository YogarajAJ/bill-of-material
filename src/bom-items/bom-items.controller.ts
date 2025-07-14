import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BomItemsService } from './bom-items.service';
import { CreateBomItemDto } from './dto/create-bom-item.dto';
import { UpdateBomItemDto } from './dto/update-bom-item.dto';

@Controller('bom-items')
export class BomItemsController {
  constructor(private readonly bomItemsService: BomItemsService) {}

  @Post()
  create(@Body() createBomItemDto: CreateBomItemDto) {
    return this.bomItemsService.create(createBomItemDto);
  }

  @Get()
  findAll() {
    return this.bomItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bomItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBomItemDto: UpdateBomItemDto) {
    return this.bomItemsService.update(+id, updateBomItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bomItemsService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Role } from '@prisma/client';
import { BomItemService } from './bomitem.service';
import { BOMItemDto } from './bomitem.dto';



@Controller('users')
export class BomItemController {
  constructor(private readonly bomItemService: BomItemService) {}

  @Post()
  create(@Body() body: BOMItemDto) {
    return this.bomItemService.create(body);
  }

  @Get()
  findAll() {
    return this.bomItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bomItemService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.bomItemService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bomItemService.remove(id);
  }
}

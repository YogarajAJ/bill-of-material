import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Role } from '@prisma/client';
import { BomService } from './bom.service';
import { BomDto } from './bom.dto';


@Controller('users')
export class BomController {
  constructor(private readonly bomService: BomService) {}

  @Post()
  create(@Body() body: BomDto) {
    return this.bomService.create(body);
  }

  @Get()
  findAll() {
    return this.bomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bomService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.bomService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bomService.remove(id);
  }
}

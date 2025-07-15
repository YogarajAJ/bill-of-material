import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Role } from '@prisma/client';

import { MaterialService } from './material.service';
import { MaterialDto } from './material.dto';



@Controller('users')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  create(@Body() body: MaterialDto) {
    return this.materialService.create(body);
  }

  @Get()
  findAll() {
    return this.materialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materialService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.materialService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialService.remove(id);
  }
}

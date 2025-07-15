import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateMaterialDto, UpdateMaterialDto } from './material.dto';
import { MaterialService } from './material.service';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  create(@Body() body: CreateMaterialDto) {
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
  update(@Param('id') id: string, @Body() body: UpdateMaterialDto) {
    return this.materialService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialService.remove(id);
  }
}

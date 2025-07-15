import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UnitService } from './unit.service';
import { CreateUnitDto, UpdateUnitDto } from './unit.dto';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  create(@Body() body: CreateUnitDto) {
    return this.unitService.create(body);
  }

  @Get()
  findAll() {
    return this.unitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUnitDto) {
    return this.unitService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitService.remove(id);
  }
}

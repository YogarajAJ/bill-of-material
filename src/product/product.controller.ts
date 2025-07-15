import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Role } from '@prisma/client';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() body:  ProductDto) {
    return this.productService.create(body);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BomItemService{
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.BOMItemCreateInput) {
    return this.prisma.bOMItem.create({ data });
  }

  findAll() {
    return this.prisma.bOMItem.findMany();
  }

  findOne(id: string) {
    return this.prisma.bOMItem.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.BOMUpdateInput) {
    return this.prisma.bOMItem.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.bOMItem.delete({ where: { id } });
  }
}

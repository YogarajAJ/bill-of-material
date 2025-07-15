import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BomService{
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.BOMCreateInput) {
    return this.prisma.bOM.create({ data });
  }

  findAll() {
    return this.prisma.bOM.findMany();
  }

  findOne(id: string) {
    return this.prisma.bOM.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.BOMUpdateInput) {
    return this.prisma.bOM.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.bOM.delete({ where: { id } });
  }
}

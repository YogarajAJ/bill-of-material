import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BomModule } from './bom/bom.module';
import { BomitemModule } from './bomitem/bomitem.module';
import { MaterialModule } from './material/material.module';


@Module({
  imports: [PrismaModule, UserModule, ProductModule, BomModule, BomitemModule, MaterialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

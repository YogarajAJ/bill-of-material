import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MaterialsModule } from './materials/materials.module';
import { UnitsModule } from './units/units.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BomsModule } from './boms/boms.module';
import { BomItemsModule } from './bom-items/bom-items.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, ProductsModule, MaterialsModule, UnitsModule, SuppliersModule, BomsModule, BomItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

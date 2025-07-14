import { Injectable } from '@nestjs/common';
import { CreateBomItemDto } from './dto/create-bom-item.dto';
import { UpdateBomItemDto } from './dto/update-bom-item.dto';

@Injectable()
export class BomItemsService {
  create(createBomItemDto: CreateBomItemDto) {
    return 'This action adds a new bomItem';
  }

  findAll() {
    return `This action returns all bomItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bomItem`;
  }

  update(id: number, updateBomItemDto: UpdateBomItemDto) {
    return `This action updates a #${id} bomItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} bomItem`;
  }
}

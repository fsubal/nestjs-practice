import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';

@Controller()
export class ItemController {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  @Get('/items')
  async index() {
    const items = await this.itemRepository.find();

    return { items };
  }

  @Get('/items/:id')
  async show(@Param() { id }: { id: string }) {
    const item = await this.itemRepository.findOne(id);

    return { item };
  }
}

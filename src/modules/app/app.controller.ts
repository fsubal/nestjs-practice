import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../items/item.entity';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  @Get()
  getHello() {
    return { message: this.appService.getHello() };
  }

  @Get('/items')
  async getItems() {
    const items = await this.itemRepository.find();

    return { items };
  }
}

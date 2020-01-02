import { Resolver, Query, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';

@Resolver('Item')
export class ItemResolver {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  @Query()
  async item(@Args('id') id: number) {
    return await this.itemRepository.findOne(id);
  }

  @Query()
  async items() {
    return await this.itemRepository.find();
  }
}

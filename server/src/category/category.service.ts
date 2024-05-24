import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getCategory(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories.filter((category) => category.parentId === null);
  }

  async getCategoryChildren(id: number): Promise<Category[]> {
    const parentCategory = await this.categoryRepository.findOne({
      where: { id },
      relations: ['children'],
    });

    if (!parentCategory) {
      return [];
    }
    return parentCategory.children;
  }
}

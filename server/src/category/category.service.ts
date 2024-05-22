import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

// type CategoryType = {
//   id: number;
//   title: string;
// };

// type Children = {
//   children: Category[];
// };

const categoryList = [
  {
    id: 0,
    title: 'Algorithm',
    children: [
      {
        id: 1,
        title: 'Leetcode',
      },
      {
        id: 2,
        title: 'Baekjoon',
      },
    ],
  },
  {
    id: 3,
    title: 'Project',
    children: [
      {
        id: 4,
        title: 'building my own tech blog',
      },
    ],
  },
];

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getCategory(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  // async getCategoryChildren(id: number): Promise<Category[]> {
  //   const children = categoryList.filter(
  //     (category: Category & Children) => category.id === id,
  //   )[0].children;

  //   return children;
  // }

  async saveCategories(): Promise<void> {
    for (const categoryData of categoryList) {
      await this.saveCategory(categoryData);
    }
  }

  private async saveCategory(categoryData: Category): Promise<void> {
    const category = new Category();
    category.id = categoryData.id;
    category.title = categoryData.title;

    await this.categoryRepository.save(category);
  }
}

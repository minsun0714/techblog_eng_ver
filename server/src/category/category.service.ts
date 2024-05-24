import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

interface CategoryData {
  id: number;
  title: string;
  parentId: number | null;
  children: CategoryData[];
}

const categoryList = [
  {
    id: 0,
    title: 'Algorithm',
    parentId: null,
    children: [
      {
        id: 1,
        title: 'Leetcode',
        parentId: 0,
        children: [],
      },
      {
        id: 2,
        title: 'Baekjoon',
        parentId: 0,
        children: [],
      },
    ],
  },
  {
    id: 3,
    title: 'Project',
    parentId: null,
    children: [
      {
        id: 4,
        title: 'building my own tech blog',
        parentId: 3,
        children: [],
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

  async getCategoryChildren(id: number): Promise<Category[]> {
    const parentCategory = await this.categoryRepository.findOne({
      where: { id },
      relations: ['children'],
    });

    if (!parentCategory) {
      return [];
    }
    console.log(parentCategory);
    return parentCategory.children;
  }

  async saveCategories(): Promise<void> {
    for (const categoryData of categoryList) {
      await this.saveCategoryAndChildren(categoryData, null);
    }
  }

  private async saveCategoryAndChildren(
    categoryData: CategoryData,
    parentId: number | null,
  ): Promise<void> {
    const category = new Category();
    category.title = categoryData.title;
    category.parentId = parentId;

    const savedCategory = await this.categoryRepository.save(category); // id를 자동으로 부여받음

    if (categoryData.children && categoryData.children.length > 0) {
      for (const childData of categoryData.children) {
        await this.saveCategoryAndChildren(childData, savedCategory.id); // 자동으로 부여받은 id를 자식을 호출하며 parentId로 지정하라고 넘겨줌
      }
    }
  }
}

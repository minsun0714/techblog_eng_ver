import { Injectable } from '@nestjs/common';

type Category = {
  id: number;
  title: string;
};

type Children = {
  children: Category[];
};

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
  constructor() {}

  async getCategory(): Promise<(Category & Children)[]> {
    return categoryList;
  }

  async getCategoryChildren(id: number): Promise<Category[]> {
    const children = categoryList.filter(
      (category: Category & Children) => category.id === id,
    )[0].children;

    return children;
  }
}

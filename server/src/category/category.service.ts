import { Injectable } from '@nestjs/common';

type Category = {
  id: number;
  title: string;
};

type Children = {
  children: Category[];
};

@Injectable()
export class CategoryService {
  constructor() {}

  async getCategory(): Promise<(Category & Children)[]> {
    return [
      {
        id: 0,
        title: 'Algorithm',
        children: [
          {
            id: 0,
            title: 'Leetcode',
          },
          {
            id: 1,
            title: 'Baekjoon',
          },
        ],
      },
      {
        id: 1,
        title: 'Project',
        children: [
          {
            id: 0,
            title: 'building my own tech blog',
          },
        ],
      },
    ];
  }
}

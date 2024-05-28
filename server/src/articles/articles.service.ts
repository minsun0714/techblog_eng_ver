import { Category } from './../category/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articles } from './articles.entity';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private articleRepository: Repository<Articles>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAllArticles(
    category1: string,
    category2: string,
  ): Promise<Articles[]> {
    const whereConditions: {
      category1?: { title: string };
      category2?: { title: string };
    } = {};

    if (category1) {
      whereConditions.category1 = { title: category1 };
    }
    if (category2) {
      whereConditions.category2 = { title: category2 };
    }
    console.log(category1, category2);

    const articles = await this.articleRepository.find({
      where: whereConditions,
      select: ['id', 'title', 'category1', 'category2'],
      relations: ['category1', 'category2'],
    });
    return articles;
  }

  async getArticleById(id: number): Promise<Articles> {
    return await this.articleRepository.findOne({
      where: { id },
      relations: ['category1', 'category2'],
    });
  }

  async postArticle(createArticleDto: CreateArticleDto): Promise<Articles> {
    const { title, category1Id, category2Id, content } = createArticleDto;

    const category1 = await this.categoryRepository.findOne({
      where: { id: category1Id },
    });
    const category2 = await this.categoryRepository.findOne({
      where: { id: category2Id },
    });

    if (!category1 || !category2) {
      throw new Error('Category not found');
    }

    const article = this.articleRepository.create({
      title,
      category1,
      category2,
      content,
    });

    const savedArticle = await this.articleRepository.save(article);
    return savedArticle;
  }

  async deleteArticleById(id: number): Promise<any> {
    return await this.articleRepository.delete({ id });
  }
}

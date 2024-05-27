import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articles } from './articles.entity';
import { Category } from 'src/category/category.entity';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private articleRepository: Repository<Articles>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAllArticles(): Promise<Articles[]> {
    return await this.articleRepository.find();
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
}

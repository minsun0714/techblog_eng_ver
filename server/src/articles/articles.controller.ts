import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  async getAllArticles() {
    return await this.articlesService.getAllArticles();
  }

  @Get(':id')
  async getArticleById(@Param() { id }) {
    return await this.articlesService.getArticleById(id);
  }

  @Post()
  async postArticle(@Body() body) {
    return await this.articlesService.postArticle(body);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  async getAllArticles(@Query() { category1, category2 }) {
    return await this.articlesService.getAllArticles(category1, category2);
  }

  @Get(':id')
  async getArticleById(@Param() { id }) {
    return await this.articlesService.getArticleById(id);
  }

  @Post()
  async postArticle(@Body() body) {
    return await this.articlesService.postArticle(body);
  }

  @Delete(':id')
  async deleteArticleById(@Param() { id }) {
    return await this.articlesService.deleteArticleById(id);
  }
}

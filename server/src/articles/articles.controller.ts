import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  async getAllArticles() {
    return await this.articlesService.getAllArticles();
  }

  @Post()
  async postArticle(@Body() body) {
    console.log(body);
    console.log('📢[articles.controller.ts:11]: body: ', body);
    return await this.articlesService.postArticle(body);
  }
}

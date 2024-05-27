import { Body, Controller, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post()
  async postArticle(@Body() body) {
    console.log(body);
    console.log('📢[articles.controller.ts:11]: body: ', body);
    return await this.articlesService.postArticle(body);
  }
}

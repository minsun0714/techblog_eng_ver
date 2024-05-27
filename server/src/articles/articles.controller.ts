import { Body, Controller, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post()
  async postArticles(@Body() body) {
    console.log(body);
    return await this.articlesService.postArticles(body);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articles } from './articles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private articleRepository: Repository<Articles>,
  ) {}
  async postArticles(body: Articles): Promise<string> {
    console.log('📢[articles.service.ts:13]: body: ', body);
    return '여기다가 post 하시면 됩니다.';
  }
}

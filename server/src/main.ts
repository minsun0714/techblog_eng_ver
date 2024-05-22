import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { CategoryService } from './category/category.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true, // 쿠키 전달을 허용
    exposedHeaders: ['Authorization'],
  });

  const categoryService = app.get(CategoryService);
  await categoryService.saveCategories();
  app.use(cookieParser());
  await app.listen(8000);
}
bootstrap();

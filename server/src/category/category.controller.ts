import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async category(@Res() res: Response) {
    const category = await this.categoryService.getCategory();
    return res
      .status(200)
      .json({ message: 'category를 성공적으로 받았습니다.', category });
  }
}

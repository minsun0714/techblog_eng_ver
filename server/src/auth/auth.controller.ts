import {
  Body,
  Controller,
  Post,
  Res,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseFilters(HttpExceptionFilter)
  async signIn(@Body() signInDto, @Res() res: Response) {
    const { access_token: accessToken } = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );

    if (!accessToken) {
      throw new UnauthorizedException('Invalid credentials');
    }
    console.log(accessToken);
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    return res.status(201).json({ message: 'Login successful' });
  }
}

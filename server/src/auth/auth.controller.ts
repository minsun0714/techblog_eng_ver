import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto, @Res() res: Response) {
    const accessToken = this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'strict',
    });
    return res.send({ message: 'Login successful' });
  }
}

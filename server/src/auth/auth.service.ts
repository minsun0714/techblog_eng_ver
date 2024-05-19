import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.getUser(username);
    if (!user || user.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

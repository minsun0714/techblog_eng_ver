import { Injectable } from '@nestjs/common';

export type User = {
  username: string;
  password: string;
};
@Injectable()
export class UsersService {
  private readonly user = {
    username: 'minsun',
    password: process.env.PASSWORD,
  };

  async getUser(username: string): Promise<User | undefined> {
    console.log('📢[users.service.ts:15]: username: ', username);
    if (username === this.user.username) return this.user;
  }
}

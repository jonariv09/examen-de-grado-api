import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/entities/user.entity';
import { UsersService } from 'src/modules/user/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string): Promise<any> {
    const user: User = await this.usersService.findOneByUsername(email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    // TODO: need to apply unencrypt password passed from params

    return user;
  }

  async login({ email }) {
    const payload = { email: email };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
      }),
    };
  }
}

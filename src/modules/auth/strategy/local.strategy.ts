import { AuthService } from '../services/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../../user/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string) {
    const user: User = await this.authService.validateUser(email);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

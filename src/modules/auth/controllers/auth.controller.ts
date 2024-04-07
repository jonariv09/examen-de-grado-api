import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../../../decorators/public.decorator';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from 'src/modules/user/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @Public()
  @Post('/register')
  register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }
}

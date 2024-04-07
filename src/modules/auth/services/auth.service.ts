import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/entities/user.entity';
import { UsersService } from 'src/modules/user/services/users.service';
import { CreateUserDto } from 'src/modules/user/dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: User = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isMatch: boolean = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }

    return user;
  }

  async login({ email, password }) {
    const user: User = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new BadRequestException("This user doesn't exist");
    }
    return {
      access_token: this.jwtService.sign(
        {
          email: email,
          password: password,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
        },
      ),
    };
  }

  async register(userDto: CreateUserDto) {
    const user = await this.usersService.findOneByEmail(userDto.email);

    if (user) {
      throw new BadRequestException('User email already in used');
    }

    const hashPassword = await bcrypt.hash(userDto.password, 10);

    const newUser: CreateUserDto = {
      ...userDto,
      password: hashPassword,
    };

    return this.usersService.createUser(newUser);
  }
}

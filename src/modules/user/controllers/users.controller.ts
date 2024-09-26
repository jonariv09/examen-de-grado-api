import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/find-all')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/find-by-username')
  findByUsername(@Param() params): Promise<User> {
    return this.usersService.findOneByUsername(params.username);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/find-all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/find-by-username')
  findByUsername(@Param() params) {
    return this.usersService.findOneByUsername(params.username);
  }

  @Post('/create')
  create(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}

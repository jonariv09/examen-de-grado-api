import { Controller, Get, Param } from '@nestjs/common';
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
}

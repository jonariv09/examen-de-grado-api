import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  findAll() {
    return this.usersRepository.findAll();
  }

  createUser(user: CreateUserDto) {
    return this.usersRepository.store(user);
  }

  findOneByUsername(username: string) {
    return this.usersRepository.findOneByUsername(username);
  }
}

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.model';

export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findById(id: string) {
    return this.userRepository.findOneBy({
      id: id,
    });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({
      username: username,
    });
  }

  async findOneByEmail(email): Promise<User> {
    return this.userRepository.findOneBy({
      email: email,
    });
  }

  async store(user: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}

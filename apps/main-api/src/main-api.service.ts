import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.dto';
import { UsersRepository } from './user/users.repository';

@Injectable()
export class MainApiService {
  constructor(private readonly userRepository: UsersRepository) {}

  async createUser(request: CreateUserRequest) {
    try {
      const user = await this.userRepository.create(request);
      return user;
    } catch (err) {
      throw err;
    }
  }
}

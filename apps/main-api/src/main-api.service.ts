import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.dto';
import { UsersRepository } from './repository/users.repository';
import { ClientProxy } from '@nestjs/microservices';
import { AGGREGATOR } from '@app/common/constants/services';
import { CreateNewsRequest } from './dto/create-news.dto';
import { NewsRepository } from './repository/news.repository';
@Injectable()
export class MainApiService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly newsRepository: NewsRepository,
    @Inject(AGGREGATOR) private aggregatorClient: ClientProxy,
  ) {}

  async createUser(request: CreateUserRequest) {
    try {
      const user = await this.userRepository.create(request);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async createNews(request: CreateNewsRequest) {
    const session = await this.newsRepository.startTransaction();
    try {
      const news = await this.newsRepository.create(request, { session });
      await this.aggregatorClient.emit('news_created', request);
      await session.commitTransaction();
      return news;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }
}

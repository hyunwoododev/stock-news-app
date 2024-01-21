import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AGGREGATOR, AUTH } from '@app/common/constants/services';
import { CreateNewsRequest } from './dto/create-news.dto';
import { NewsRepository } from './repository/news.repository';
@Injectable()
export class MainApiService {
  constructor(
    private readonly newsRepository: NewsRepository,
    @Inject(AGGREGATOR) private aggregatorClient: ClientProxy,
    @Inject(AUTH) private authServiceClient: ClientProxy,
  ) {}

  async checkAuthServiceConnection() {
    await this.authServiceClient.emit('new_one', 'hihi');
    return 'success';
  }

  async createNews(request: CreateNewsRequest) {
    console.log('hihi');
    return;
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

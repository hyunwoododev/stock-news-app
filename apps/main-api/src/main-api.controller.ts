import { Body, Controller, Get, Post } from '@nestjs/common';
import { MainApiService } from './main-api.service';
import { CreateNewsRequest } from './dto/create-news.dto';

@Controller()
export class MainApiController {
  constructor(private readonly mainApiService: MainApiService) {}

  @Get()
  async sayHello() {
    return `hey, I'm main-api`;
  }

  @Post('/create-news')
  async createNews(@Body() request: CreateNewsRequest) {
    return this.mainApiService.createNews(request);
  }
}

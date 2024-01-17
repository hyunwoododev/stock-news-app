import { Body, Controller, Post } from '@nestjs/common';
import { MainApiService } from './main-api.service';
import { CreateUserRequest } from './dto/create-user.dto';
import { CreateNewsRequest } from './dto/create-news.dto';

@Controller()
export class MainApiController {
  constructor(private readonly mainApiService: MainApiService) {}

  @Post('/create-user')
  async createUser(@Body() request: CreateUserRequest) {
    return this.mainApiService.createUser(request);
  }

  @Post('/create-news')
  async createNews(@Body() request: CreateNewsRequest) {
    return this.mainApiService.createNews(request);
  }
}

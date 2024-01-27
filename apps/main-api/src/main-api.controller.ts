import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MainApiService } from './main-api.service';
import { CreateNewsRequest } from './dto/create-news.dto';
import { JwtAuthGuard } from '@app/common';

@Controller()
export class MainApiController {
  constructor(private readonly mainApiService: MainApiService) {}

  @Get()
  async sayHello() {
    return `hey, I'm main-api!`;
  }

  @Post('/create-news')
  @UseGuards(JwtAuthGuard)
  async createNews(@Body() request: CreateNewsRequest) {
    return this.mainApiService.createNews(request);
  }
}

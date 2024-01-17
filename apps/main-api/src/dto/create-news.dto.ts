import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewsRequest {
  @IsString()
  @IsNotEmpty()
  url: string;

  @Optional()
  description: string;
}

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsStrongPassword()
  password: string;
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from './users/schemas/user.schema';

export interface TokenPayload {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User, response: Response) {
    /**
     * session의 유효기간을 설정
     */
    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    /**
     * JWT 토큰을 생성
     */
    const tokenPayload: TokenPayload = {
      userId: user._id.toHexString(),
    };
    const token = this.jwtService.sign(tokenPayload);

    /**
     * JWT 토큰을 쿠키에 저장
     */
    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  logout(response: Response) {
    /**
     * 쿠키에 저장된 JWT 토큰을 제거
     */
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }
}

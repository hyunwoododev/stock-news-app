import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './users/schemas/user.schema';

export const getCurrentUserByContext = (context: ExecutionContext): User => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

/**
 * 현재 사용자 정보를 가져오는 데코레이터
 */
export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);

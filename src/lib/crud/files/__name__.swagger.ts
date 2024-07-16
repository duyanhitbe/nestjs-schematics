import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { PaginatedUser } from './dto/paginated-user.dto';

export function ApiCreateUser() {
  return applyDecorators(
    ApiOperation({ summary: 'Create user' }),
    ApiCreatedResponse({
      type: UserEntity,
      description: 'Created user successfully',
    }),
  );
}

export function ApiFindUser() {
  return applyDecorators(
    ApiOperation({ summary: 'Find user' }),
    ApiOkResponse({
      type: PaginatedUser,
      description: 'Find user successfully',
    }),
  );
}

export function ApiFindOneUser() {
  return applyDecorators(
    ApiOperation({ summary: 'Find user by id' }),
    ApiOkResponse({
      type: UserEntity,
      description: 'Find user by id successfully',
    }),
  );
}

export function ApiUpdateUser() {
  return applyDecorators(
    ApiOperation({ summary: 'Update user' }),
    ApiOkResponse({
      type: UserEntity,
      description: 'Update user successfully',
    }),
  );
}

export function ApiRemoveUser() {
  return applyDecorators(
    ApiOperation({ summary: 'Soft remove user' }),
    ApiOkResponse({
      type: UserEntity,
      description: 'Soft remove user successfully',
    }),
  );
}

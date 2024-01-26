import { z } from 'zod';
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
  userUpdateSchema,
  usersListResponseSchema,
} from '../schemas/users.schemas';
import { DeepPartial } from 'typeorm';

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUsersListResponse = z.infer<typeof usersListResponseSchema>;
type TUserUpdate = DeepPartial<typeof userUpdateSchema>;

export { TUser, TUserRequest, TUserResponse, TUsersListResponse, TUserUpdate };

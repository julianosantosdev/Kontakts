import { z } from 'zod';
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
  usersListResponseSchema,
} from '../schemas/users.schemas';

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUsersListResponse = z.infer<typeof usersListResponseSchema>;

export { TUser, TUserRequest, TUserResponse, TUsersListResponse };

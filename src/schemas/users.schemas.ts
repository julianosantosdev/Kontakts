import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  fullName: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(30),
  phone: z.string().max(20),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});"19 99608-0304"

const userResponseSchema = userSchema.omit({ password: true });
const usersListResponseSchema = z.array(userResponseSchema);

export {
  userSchema,
  userRequestSchema,
  userResponseSchema,
  usersListResponseSchema,
};

import { loginSchema } from '../schemas/login.schemas';
import { z } from 'zod';

type TLoginRequest = z.infer<typeof loginSchema>;
type Ttoken = {
  token: string;
};

export { TLoginRequest, Ttoken };
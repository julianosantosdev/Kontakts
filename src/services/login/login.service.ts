import { AppError } from '../../errors';
import { TLoginRequest, Ttoken } from '../../interfaces/login.interface';
import * as brcypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const loginService = async (
  loginData: TLoginRequest,
  userHashPassword: string,
  userId: number
): Promise<Ttoken> => {
  const verifyPassword: boolean = await brcypt.compare(
    loginData.password,
    userHashPassword
  );

  if (!verifyPassword) {
    throw new AppError('Invalid credentials', 401);
  }

  if (!process.env.SECRET_KEY) {
    throw new AppError('Missing env var: DATABASE_URL');
  }

  const token: string = jwt.sign(
    { userEmail: loginData.email },
    String(process.env.SECRET_KEY),
    {
      expiresIn: '2d',
      subject: String(userId),
    }
  );

  return { token };
};

export default loginService;

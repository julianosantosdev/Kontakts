import { Request, Response } from 'express';
import loginService from '../services/login/login.service';
import { TLoginRequest, Ttoken } from '../interfaces/login.interface';

const loginController = async (
  request: Request,
  response: Response
): Promise<Response<Ttoken>> => {
  const loginData: TLoginRequest = request.body;
  const userHashPassword: string = response.locals.userHashPwd;
  const userId: number = response.locals.userId;
  const loginToken = await loginService(loginData, userHashPassword, userId);
  return response.status(200).json(loginToken);
};

export { loginController };

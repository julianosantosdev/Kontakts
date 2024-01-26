import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../../entities';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors';

const verifyLoginUserMiddleware = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const userEmail: string = request.body.email;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    email: userEmail,
  });

  if (!user || user.deletedAt !== null) {
    throw new AppError('Confirm credentials. Login Failed!', 401);
  }

  response.locals.userHashPwd = String(user.password);
  response.locals.userId = Number(user.id);

  return nextFunction();
};

export default verifyLoginUserMiddleware;

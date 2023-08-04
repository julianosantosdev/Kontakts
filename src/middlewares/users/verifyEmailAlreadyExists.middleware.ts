import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../../entities';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors';

const verifyEmailAlredyExistsMiddleware = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const newUserEmail: string = request.body.email;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
  if (request.method === 'PATCH') {
    const user: User | null = await userRepository.findOne({
      where: {
        email: newUserEmail,
        id: response.locals.userId,
      },
    });

    if (user) {
      return nextFunction();
    }
  }

  const user: User | null = await userRepository.findOneBy({
    email: newUserEmail,
  });

  if (user && newUserEmail === user.email) {
    throw new AppError('Email already exists', 409);
  }

  return nextFunction();
};

export default verifyEmailAlredyExistsMiddleware;

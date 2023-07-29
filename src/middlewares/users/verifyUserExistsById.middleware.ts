import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../../entities';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors';

const verifyUserIdMiddleware = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    id: Number(request.params.id),
  });

  if (!user || user.deletedAt !== null) {
    throw new AppError('User not found', 404);
  }

  nextFunction();
};

export default verifyUserIdMiddleware;

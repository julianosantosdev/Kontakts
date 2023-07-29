import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../../entities';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors';

const verifyPhoneExistsMiddleware = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const newUserPhone: string = request.body.phone;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    phone: newUserPhone,
  });

  if (user && newUserPhone === user.phone) {
    throw new AppError('Phone number already exists', 409);
  }

  return nextFunction();
};

export default verifyPhoneExistsMiddleware;

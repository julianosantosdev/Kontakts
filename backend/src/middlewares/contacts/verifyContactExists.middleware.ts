import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors';
import { Contact } from '../../entities';

const verifyContactExistsMiddleware = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const newName: string = request.body.fullName;
  const userId: number = Number(response.locals.userId);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userContacts: Array<Contact> = await contactRepository
    .createQueryBuilder('contacts')
    .innerJoinAndSelect('contacts.user', 'user')
    .innerJoinAndSelect('contacts.fullName', 'fullname')
    .where('contacts.user = :userId and fullname.fullName = :newName', {
      userId,
      newName,
    })
    .getMany();

  if (userContacts.length > 0) {
    throw new AppError('You already have this contact name', 409);
  }

  return nextFunction();
};

export default verifyContactExistsMiddleware;

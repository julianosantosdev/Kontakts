import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors';
import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { Address, Email, FullName, Phone } from '../../entities';

const verifyContactFieldsPermissionMiddleware = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const userIdFromRequest: number = Number(response.locals.userId);
  const fullNameId: number = Number(request.params.fnId);
  const addressId: number = Number(request.params.addressId);
  const phoneId: number = Number(request.params.phoneId);
  const emailId: number = Number(request.params.emailId);
  const error: AppError = new AppError(
    'You do not have permissions to perform this action!',
    403
  );

  if (fullNameId) {
    const entityRepository: Repository<FullName> =
      AppDataSource.getRepository(FullName);
    const entityObject: FullName | null = await entityRepository.findOne({
      relations: {
        contact: {
          user: true,
        },
      },
      where: {
        id: fullNameId,
      },
    });

    if (entityObject?.contact.user.id !== userIdFromRequest) {
      throw error;
    }
  }

  if (addressId) {
    const entityRepository: Repository<Address> =
      AppDataSource.getRepository(Address);
    const entityObject: Address | null = await entityRepository.findOne({
      relations: {
        contact: {
          user: true,
        },
      },
      where: {
        id: addressId,
      },
    });

    if (entityObject?.contact.user.id !== userIdFromRequest) {
      throw error;
    }
  }

  if (phoneId) {
    const entityRepository: Repository<Phone> =
      AppDataSource.getRepository(Phone);
    const entityObject: Phone | null = await entityRepository.findOne({
      relations: {
        contact: {
          user: true,
        },
      },
      where: {
        id: phoneId,
      },
    });

    if (entityObject?.contact.id !== userIdFromRequest) {
      throw error;
    }
  }

  if (emailId) {
    const entityRepository: Repository<Email> =
      AppDataSource.getRepository(Email);
    const entityObject: Email | null = await entityRepository.findOne({
      relations: {
        contact: {
          user: true,
        },
      },
      where: {
        id: emailId,
      },
    });

    if (entityObject?.contact.id !== userIdFromRequest) {
      throw error;
    }
  }

  return nextFunction();
};

export default verifyContactFieldsPermissionMiddleware;

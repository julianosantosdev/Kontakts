import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors';

const verifyUserPermissionMiddleware = (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): void => {
  const userIdFromRequest: number = Number(response.locals.userId);
  const userIdToUpdate: number = Number(request.params.id);

  if (userIdFromRequest !== userIdToUpdate) {
    throw new AppError('You do not have permissions to perform this action!');
  }

  return nextFunction();
};

export default verifyUserPermissionMiddleware;

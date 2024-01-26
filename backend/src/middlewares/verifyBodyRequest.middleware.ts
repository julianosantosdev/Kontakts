import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';
import { TUserRequest } from '../interfaces/users.interface';

const verifyBodyRequestMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, nextFunction: NextFunction): void => {
    const requestBodyValidation: TUserRequest = schema.parse(request.body);
    request.body = requestBodyValidation;
    nextFunction();
  };

export default verifyBodyRequestMiddleware;

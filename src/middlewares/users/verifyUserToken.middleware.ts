import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const verifyTokenMiddleware = (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): void => {
  let userToken: string | undefined = request.headers.authorization;

  if (!userToken) {
    throw new AppError('Missing bearer token', 401);
  }

  if (!process.env.SECRET_KEY) {
    throw new AppError('Missing env var: DATABASE_URL');
  }

  userToken = userToken.split(' ')[1];

  jwt.verify(userToken, process.env.SECRET_KEY, (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    console.log(decoded);

    const admin: number = decoded.admin;
    const id: number = decoded.sub;

    response.locals.admin = admin;
    response.locals.userId = id;
  });

  nextFunction();
};

export default verifyTokenMiddleware;

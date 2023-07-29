import { Request, Response } from 'express';
import createUserService from '../services/users/user.service';

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const message = await createUserService('ok');
  return response.status(201).json(message);
};

export { createUserController };

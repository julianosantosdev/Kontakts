import { Request, Response } from 'express';
import createUserService from '../services/users/createUser.service';
import { TUserRequest } from '../interfaces/users.interface';

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newUserData: TUserRequest = request.body;
  const newUser = await createUserService(newUserData);
  return response.status(201).json(newUser);
};

export { createUserController };

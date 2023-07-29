import { Request, Response } from 'express';
import createUserService from '../services/users/createUser.service';
import { TUserRequest, TUsersListResponse } from '../interfaces/users.interface';
import retrieveUsersService from '../services/users/retrieveUsers.service';

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newUserData: TUserRequest = request.body;
  const newUser = await createUserService(newUserData);
  return response.status(201).json(newUser);
};

const retrieveUsersController = async (
  request: Request,
  response: Response
): Promise<Response<TUsersListResponse>> => {
  const usersList: TUsersListResponse = await retrieveUsersService();
  return response.status(200).json(usersList);
};

export { createUserController, retrieveUsersController };

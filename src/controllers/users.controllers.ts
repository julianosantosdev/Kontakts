import { Request, Response } from 'express';
import createUserService from '../services/users/createUser.service';
import {
  TUserRequest,
  TUserResponse,
  TUserUpdate,
} from '../interfaces/users.interface';
import updateUserService from '../services/users/updateUser.service';
import deleteUserService from '../services/users/deleteUser.service';
import retrieveUserService from '../services/users/retrieveUsers.service';

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newUserData: TUserRequest = request.body;
  const newUser = await createUserService(newUserData);
  return response.status(201).json(newUser);
};

const retrieveUserController = async (
  request: Request,
  response: Response
): Promise<Response<TUserResponse>> => {
  const userId: number = Number(response.locals.userId);
  const userData: TUserResponse = await retrieveUserService(userId);
  return response.status(200).json(userData);
};

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  const userNewData: TUserUpdate = request.body;
  const userUpdatedData = await updateUserService(userNewData, userId);
  return response.status(200).json(userUpdatedData);
};

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  const userToDelete = await deleteUserService(userId);
  return response.status(204).json(userToDelete);
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};

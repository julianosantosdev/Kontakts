import { Request, Response } from 'express';
import createUserService from '../services/users/createUser.service';
import {
  TUserRequest,
  TUserUpdate,
  TUsersListResponse,
} from '../interfaces/users.interface';
import retrieveUsersService from '../services/users/retrieveUsers.service';
import updateUserService from '../services/users/updateUser.service';
import deleteUserService from '../services/users/deleteUser.service';

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
  const userUpdatedData = await deleteUserService(userId);
  return response.status(200).json(userUpdatedData);
};

export {
  createUserController,
  retrieveUsersController,
  updateUserController,
  deleteUserController,
};

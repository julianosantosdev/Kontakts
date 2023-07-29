import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  retrieveUsersController,
  updateUserController,
} from '../controllers/users.controllers';
import verifyUserIdMiddleware from '../middlewares/users/verifyUserExistsById.middleware';
import verifyBodyRequestMiddleware from '../middlewares/verifyBodyRequest.middleware';
import { userRequestSchema } from '../schemas/users.schemas';
import verifyEmailAlredyExistsMiddleware from '../middlewares/users/verifyEmailAlreadyExists.middleware';
import verifyPhoneAlreadyExistsMiddleware from '../middlewares/users/verifyPhoneAlreadyExists.middleware';

const usersRoute: Router = Router();

usersRoute.post(
  '',
  verifyBodyRequestMiddleware(userRequestSchema),
  verifyEmailAlredyExistsMiddleware,
  verifyPhoneAlreadyExistsMiddleware,
  createUserController
);

usersRoute.get('', retrieveUsersController);

usersRoute.patch(
  '/:id',
  verifyUserIdMiddleware,
  verifyEmailAlredyExistsMiddleware,
  verifyPhoneAlreadyExistsMiddleware,
  updateUserController
);

usersRoute.delete('/:id', verifyUserIdMiddleware, deleteUserController);

export default usersRoute;

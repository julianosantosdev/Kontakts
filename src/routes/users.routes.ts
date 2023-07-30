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
import verifyTokenMiddleware from '../middlewares/users/verifyUserToken.middleware';
import verifyUserPermissionMiddleware from '../middlewares/users/verifyUserPermissions.middleware';

const usersRoute: Router = Router();

usersRoute.post(
  '',
  verifyBodyRequestMiddleware(userRequestSchema),
  verifyEmailAlredyExistsMiddleware,
  verifyPhoneAlreadyExistsMiddleware,
  createUserController
);

usersRoute.get('', verifyTokenMiddleware, retrieveUsersController);

usersRoute.patch(
  '/:id',
  verifyTokenMiddleware,
  verifyUserIdMiddleware,
  verifyUserPermissionMiddleware,
  verifyEmailAlredyExistsMiddleware,
  verifyPhoneAlreadyExistsMiddleware,
  updateUserController
);

usersRoute.delete(
  '/:id',
  verifyTokenMiddleware,
  verifyUserIdMiddleware,
  verifyUserPermissionMiddleware,
  deleteUserController
);

export default usersRoute;

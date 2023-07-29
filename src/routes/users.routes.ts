import { Router } from 'express';
import { createUserController, retrieveUsersController } from '../controllers/users.controllers';
import verifyEmailExistsMiddleware from '../middlewares/users/verifyEmailExists.middleware';
import verifyPhoneExistsMiddleware from '../middlewares/users/verifyPhoneExists.middleware';

const usersRoute: Router = Router();

usersRoute.post(
  '',
  verifyEmailExistsMiddleware,
  verifyPhoneExistsMiddleware,
  createUserController
);

usersRoute.get("",
retrieveUsersController)

export default usersRoute;

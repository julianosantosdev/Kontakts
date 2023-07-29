import { Router } from 'express';
import { createUserController } from '../controllers/users.controllers';
import verifyEmailExistsMiddleware from '../middlewares/users/verifyEmailExists.middleware';
import verifyPhoneExistsMiddleware from '../middlewares/users/verifyPhoneExists.middleware';

const usersRoute: Router = Router();

usersRoute.post(
  '',
  verifyEmailExistsMiddleware,
  verifyPhoneExistsMiddleware,
  createUserController
);

export default usersRoute;

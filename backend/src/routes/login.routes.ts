import { Router } from 'express';
import { loginController } from '../controllers/login.controllers';
import verifyLoginUserMiddleware from '../middlewares/login/verifyLoginUser.middleware';
import verifyBodyRequestMiddleware from '../middlewares/verifyBodyRequest.middleware';
import { loginSchema } from '../schemas/login.schemas';

const loginRoute: Router = Router();

loginRoute.post(
  '',
  verifyBodyRequestMiddleware(loginSchema),
  verifyLoginUserMiddleware,
  loginController
);

export default loginRoute;

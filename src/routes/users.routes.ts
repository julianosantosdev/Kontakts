import { Router } from 'express';
import { createUserController } from '../controllers/users.controllers';

const usersRoute: Router = Router();

usersRoute.post('', createUserController);

export default usersRoute;

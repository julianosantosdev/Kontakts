import { Router } from 'express';
import { createContactController, listContactsController } from '../controllers/contacts.controllers';
import verifyTokenMiddleware from '../middlewares/users/verifyUserToken.middleware';

const contactRoute: Router = Router();

contactRoute.post('', verifyTokenMiddleware, createContactController);
contactRoute.get('', listContactsController)

export default contactRoute;

import { Router } from 'express';
import {
  createContactController,
  listContactsController,
} from '../controllers/contacts.controllers';
import verifyTokenMiddleware from '../middlewares/users/verifyUserToken.middleware';
import verifyBodyRequestMiddleware from '../middlewares/verifyBodyRequest.middleware';
import { contactRequestSchema } from '../schemas/contacts.schemas';

const contactRoute: Router = Router();

contactRoute.post(
  '',
  verifyBodyRequestMiddleware(contactRequestSchema),
  verifyTokenMiddleware,
  createContactController
);
contactRoute.get('', verifyTokenMiddleware, listContactsController);

export default contactRoute;

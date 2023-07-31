import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
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

contactRoute.patch('/:contactId', updateContactController);

contactRoute.delete('/:contactId', deleteContactController);

export default contactRoute;

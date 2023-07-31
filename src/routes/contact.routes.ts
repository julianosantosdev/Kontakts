import { Router } from 'express';
import {
  contactRequestSchema,
  createNewAddressController,
  createContactController,
  deleteAddressController,
  deleteContactController,
  listContactsController,
  updateAddressController,
  updateFullNameController,
  verifyBodyRequestMiddleware,
  verifyTokenMiddleware,
} from './index.routes';
import {
  createEmailController,
  deleteEmailController,
  updateEmailController,
} from '../controllers/contacts.controllers';

const contactRoute: Router = Router();

contactRoute.post(
  '',
  verifyBodyRequestMiddleware(contactRequestSchema),
  verifyTokenMiddleware,
  createContactController
);
contactRoute.get('', verifyTokenMiddleware, listContactsController);

contactRoute.delete('/:contactId', deleteContactController);

contactRoute.patch('/fullname/:fnId', updateFullNameController);

contactRoute.post('/:contactId/address', createNewAddressController);
contactRoute.patch('/address/:addressId', updateAddressController);
contactRoute.delete('/address/:addressId', deleteAddressController);

contactRoute.post('/:contactId/email', createEmailController);
contactRoute.patch('/email/:emailId', updateEmailController);
contactRoute.delete('/email/:emailId', deleteEmailController);

contactRoute.post('/:contactId/phone');
contactRoute.patch('/phone/:phoneId');
contactRoute.delete('/phone/:phoneId');

export default contactRoute;

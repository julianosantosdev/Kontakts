import { Router } from 'express';
import * as index from './index.routes';

const contactRoute: Router = Router();

contactRoute.post(
  '',
  index.verifyBodyRequestMiddleware(index.contactRequestSchema),
  index.verifyTokenMiddleware,
  index.createContactController
);
contactRoute.get('', index.verifyTokenMiddleware, index.listContactsController);

contactRoute.delete('/:contactId', index.deleteContactController);

contactRoute.patch('/fullname/:fnId', index.updateFullNameController);

contactRoute.post('/:contactId/address', index.createNewAddressController);
contactRoute.patch('/address/:addressId', index.updateAddressController);
contactRoute.delete('/address/:addressId', index.deleteAddressController);

contactRoute.post('/:contactId/email', index.createEmailController);
contactRoute.patch('/email/:emailId', index.updateEmailController);
contactRoute.delete('/email/:emailId', index.deleteEmailController);

contactRoute.post('/:contactId/phone', index.createPhoneController);
contactRoute.patch('/phone/:phoneId', index.updatePhoneController);
contactRoute.delete('/phone/:phoneId', index.deletePhoneController);

export default contactRoute;

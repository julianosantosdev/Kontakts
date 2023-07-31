import {
  createNewAddressController,
  createContactController,
  deleteContactController,
  listContactsController,
  updateAddressController,
  updateFullNameController,
  deleteAddressController,
  createEmailController,
  createPhoneController,
  deleteEmailController,
  deletePhoneController,
  updateEmailController,
  updatePhoneController,
} from '../controllers/contacts.controllers';
import verifyTokenMiddleware from '../middlewares/users/verifyUserToken.middleware';
import verifyBodyRequestMiddleware from '../middlewares/verifyBodyRequest.middleware';
import { contactRequestSchema } from '../schemas/contacts.schemas';

export {
  createNewAddressController,
  createContactController,
  deleteContactController,
  listContactsController,
  updateAddressController,
  updateFullNameController,
  verifyTokenMiddleware,
  verifyBodyRequestMiddleware,
  contactRequestSchema,
  deleteAddressController,
  createEmailController,
  createPhoneController,
  deleteEmailController,
  deletePhoneController,
  updateEmailController,
  updatePhoneController,
};

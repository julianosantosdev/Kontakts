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
import verifyContactExistsMiddleware from '../middlewares/contacts/verifyContactExists.middleware';
import verifyContactFieldsPermissionMiddleware from '../middlewares/contacts/verifyContactsPermissions.middleware';
import verifyUserFullNamePermissionMiddleware from '../middlewares/contacts/verifyContactsPermissions.middleware';
import verifyTokenMiddleware from '../middlewares/users/verifyUserToken.middleware';
import verifyBodyRequestMiddleware from '../middlewares/verifyBodyRequest.middleware';
import {
  addressUpdateSchema,
  addressCreateSchema,
  contactRequestSchema,
  fullNameRequestSchema,
  phoneCreateUpdateRequest,
  emailCreateUpdateRequest,
} from '../schemas/contacts.schemas';
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
  verifyContactExistsMiddleware,
  verifyUserFullNamePermissionMiddleware,
  phoneCreateUpdateRequest,
  fullNameRequestSchema,
  addressUpdateSchema,
  addressCreateSchema,
  emailCreateUpdateRequest,
  verifyContactFieldsPermissionMiddleware,
};

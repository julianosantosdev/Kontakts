import { Router } from 'express';
import * as index from './index.routes';

const contactRoute: Router = Router();

contactRoute.post(
  '',
  index.verifyBodyRequestMiddleware(index.contactRequestSchema),
  index.verifyTokenMiddleware,
  index.verifyContactExistsMiddleware,
  index.createContactController
);
contactRoute.get('', index.verifyTokenMiddleware, index.listContactsController);

contactRoute.delete('/:contactId', index.deleteContactController);

contactRoute.patch(
  '/fullname/:fnId',
  index.verifyBodyRequestMiddleware(index.fullNameRequestSchema),
  index.verifyTokenMiddleware,
  index.verifyContactExistsMiddleware,
  index.updateFullNameController
);

contactRoute.post(
  '/:contactId/address',
  index.verifyBodyRequestMiddleware(index.addressCreateSchema),
  index.createNewAddressController
);
contactRoute.patch(
  '/address/:addressId',
  index.verifyBodyRequestMiddleware(index.addressUpdateSchema),
  index.verifyTokenMiddleware,
  index.updateAddressController
);
contactRoute.delete(
  '/address/:addressId',
  index.verifyTokenMiddleware,
  index.deleteAddressController
);

contactRoute.post(
  '/:contactId/email',
  index.verifyTokenMiddleware,
  index.createEmailController
);
contactRoute.patch(
  '/email/:emailId',
  index.verifyBodyRequestMiddleware(index.emailCreateUpdateRequest),
  index.verifyTokenMiddleware,
  index.updateEmailController
);
contactRoute.delete(
  '/email/:emailId',
  index.verifyTokenMiddleware,
  index.deleteEmailController
);

contactRoute.post(
  '/:contactId/phone',
  index.verifyBodyRequestMiddleware(index.phoneCreateUpdateRequest),
  index.verifyTokenMiddleware,
  index.createPhoneController
);
contactRoute.patch(
  '/phone/:phoneId',
  index.verifyBodyRequestMiddleware(index.phoneCreateUpdateRequest),
  index.verifyTokenMiddleware,
  index.updatePhoneController
);
contactRoute.delete(
  '/phone/:phoneId',
  index.verifyTokenMiddleware,
  index.deletePhoneController
);

export default contactRoute;

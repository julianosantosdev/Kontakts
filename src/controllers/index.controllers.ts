import createContactService from '../services/contacts/createContact.service';
import listContactsService from '../services/contacts/listContacts.service';
import deleteContactService from '../services/contacts/deleteContact.service';
import updateFullNameService from '../services/contacts/updateFullName.service';
import {
  TAddressUpdate,
  TCreateAddressRequest,
  TFullNameRequest,
  TCreateUpdateEmailRequest,
  TCreateUpdatePhoneRequest,
} from '../interfaces/contacts.interface';
import createNewAddressService from '../services/contacts/createNewAddress.service';
import updateAddressService from '../services/contacts/updateAddress.service';
import deleteAddressService from '../services/contacts/deleteAddress.service';
import createNewAEmailService from '../services/contacts/createNewEmail.service';
import createNewPhoneService from '../services/contacts/createPhone.service';
import deleteEmailService from '../services/contacts/deleteEmail.service';
import updateEmailService from '../services/contacts/updateEmail.service';
import updatePhoneService from '../services/contacts/updatePhone.service';
import deletePhoneService from '../services/contacts/deletePhone.service';

export {
  createNewAddressService,
  createContactService,
  listContactsService,
  deleteContactService,
  updateFullNameService,
  TAddressUpdate,
  TCreateAddressRequest,
  TFullNameRequest,
  TCreateUpdateEmailRequest,
  TCreateUpdatePhoneRequest,
  updateAddressService,
  deleteAddressService,
  createNewAEmailService,
  createNewPhoneService,
  deleteEmailService,
  updateEmailService,
  updatePhoneService,
  deletePhoneService
};

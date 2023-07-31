import createContactService from '../services/contacts/createContact.service';
import listContactsService from '../services/contacts/listContacts.service';
import deleteContactService from '../services/contacts/deleteContact.service';
import updateFullNameService from '../services/contacts/updateFullName.service';
import {
  TAddressUpdate,
  TCreateAddressRequest,
  TFullNameRequest,
  TCreateUpdateEmailRequest,
} from '../interfaces/contacts.interface';
import createNewAddressService from '../services/contacts/createNewAddress.service';
import updateAddressService from '../services/contacts/updateAddress.service';
import deleteAddressService from '../services/contacts/deleteAddress.service';
import createNewAEmailService from '../services/contacts/createNewEmail.service';

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
  updateAddressService,
  deleteAddressService,
  createNewAEmailService,
};

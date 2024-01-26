import { SubmitHandler } from 'react-hook-form';
import { ICreateFormContact } from '../../components/Modal/CreateContact/createContactSchema';
import { IFullName } from '../../components/Modal/EditContact/EditContactFields/EditName';
import { IContactEmail } from '../../components/Modal/EditContact/EditContactFields/EditEmail';
import { IEditContactPhone } from '../../components/Modal/EditContact/EditContactFields/EditPhone';
import { IUpdateContactAddress } from '../../components/Modal/EditContact/EditContactFields/EditAddress';

interface IContactFullName {
  id: number;
  fullName: string;
  createdAt: string;
}

interface IContactAddresses {
  id: number;
  street: string;
  number: string;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

interface IContactPhones {
  id: number;
  phone: string;
  createdAt: string;
}
interface IContactEmails {
  id: number;
  email: string;
  createdAt: string;
}

interface IContact {
  id: number;
  createdAt: string;
  fullName: IContactFullName;
  addresses: Array<IContactAddresses>;
  phones: Array<IContactPhones>;
  emails: Array<IContactEmails>;
}

interface IContactsContext {
  userContactsListFromApi: () => Promise<void>;
  contactsList: Array<IContact>;
  handleCreateContact: SubmitHandler<ICreateFormContact>;
  getContactDetails: (id: number) => void;
  contactDetails: IContact;
  handleUpdateContactName: SubmitHandler<IFullName>;
  handleDeleteContact: () => void;
  handleUpdateContactEmail: SubmitHandler<IContactEmail>;
  handleUpdateContactPhone: SubmitHandler<IEditContactPhone>;
  handleUpdateAddress: SubmitHandler<IUpdateContactAddress>;
}

export type {
  IContactFullName,
  IContact,
  IContactsContext,
  IContactEmails,
  IContactPhones,
  IContactAddresses
};

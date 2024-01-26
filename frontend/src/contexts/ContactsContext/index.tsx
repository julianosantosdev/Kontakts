import { createContext, useState } from 'react';
import { IProviderProps } from '../../types';
import { api } from '../../services/api.service';
import { AxiosError, AxiosResponse } from 'axios';
import { IAxiosErrorMessage } from '../UserContext/types';
import { toast } from 'react-toastify';
import {
  IContact,
  IContactAddresses,
  IContactEmails,
  IContactPhones,
  IContactsContext
} from './types';
import { SubmitHandler } from 'react-hook-form';
import {
  ICreateContact,
  ICreateFormContact
} from '../../components/Modal/CreateContact/createContactSchema';
import { IFullName } from '../../components/Modal/EditContact/EditContactFields/EditName';
import { IContactEmail } from '../../components/Modal/EditContact/EditContactFields/EditEmail';
import { IEditContactPhone } from '../../components/Modal/EditContact/EditContactFields/EditPhone';
import { IUpdateContactAddress } from '../../components/Modal/EditContact/EditContactFields/EditAddress';

const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const ContactsProvider = ({ children }: IProviderProps) => {
  const [contactsList, setContactsList] = useState([] as Array<IContact>);
  const [contactDetails, setContactDetails] = useState({} as IContact);

  const token = localStorage.getItem('@KontaktsToken') || null;

  const headersAuth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const userContactsListFromApi = async () => {
    const token = localStorage.getItem('@KontaktsToken') || null;

    if (token !== null) {
      try {
        const contactsListRequest = await api.get<Array<IContact>>(
          '/contacts',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const orderContacts = contactsListRequest.data.sort((a, b) => {
          if (a.fullName.fullName < b.fullName.fullName) {
            return -1;
          }
          return 1;
        });

        setContactsList(orderContacts);
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  const handleCreateContact: SubmitHandler<ICreateFormContact> = async (
    newContactData
  ) => {
    const { street, state, city, number, ...rest } = newContactData;

    const contactData: ICreateContact = {
      address: {
        street,
        state,
        city,
        number
      },
      ...rest
    };

    if (token !== null) {
      try {
        const newContactResponse: AxiosResponse =
          await api.post<ICreateContact>('/contacts', contactData, headersAuth);

        if (newContactResponse.status === 201) {
          userContactsListFromApi();
          toast.success('Usuário criado com sucesso!');
        }
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  const getContactDetails = (id: number) => {
    const contactInfo: IContact | undefined = contactsList.find(
      (contact) => contact.id === id
    );
    setContactDetails(contactInfo!);
  };

  const handleUpdateContactName: SubmitHandler<IFullName> = async (
    contactNewName
  ) => {
    if (token !== null) {
      try {
        const updateNameResponse: AxiosResponse =
          await api.patch<ICreateContact>(
            `/contacts/fullname/${contactDetails.fullName.id}`,
            contactNewName,
            headersAuth
          );

        if (updateNameResponse.status === 200) {
          userContactsListFromApi();
          toast.success('Nome atualizado');
        }
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  const handleUpdateContactEmail: SubmitHandler<IContactEmail> = async (
    contactNewEmail
  ) => {
    if (token !== null) {
      try {
        const updateEmailResponse: AxiosResponse =
          await api.patch<IContactEmails>(
            `/contacts/email/${contactDetails.emails[0].id}`,
            contactNewEmail,
            headersAuth
          );

        if (updateEmailResponse.status === 200) {
          userContactsListFromApi();
          toast.success('Email atualizado');
        }
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  const handleUpdateContactPhone: SubmitHandler<IEditContactPhone> = async (
    contactNewEmail
  ) => {
    if (token !== null) {
      try {
        const updatePhoneResponse: AxiosResponse =
          await api.patch<IContactPhones>(
            `/contacts/phone/${contactDetails.phones[0].id}`,
            contactNewEmail,
            headersAuth
          );

        if (updatePhoneResponse.status === 200) {
          userContactsListFromApi();
          toast.success('Email atualizado');
        }
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  const handleUpdateAddress: SubmitHandler<IUpdateContactAddress> = async (
    contactNewEmail
  ) => {
    if (token !== null) {
      try {
        const updateAddresssResponse: AxiosResponse =
          await api.patch<IContactAddresses>(
            `/address/${contactDetails.addresses[0].id}`,
            contactNewEmail,
            headersAuth
          );

        if (updateAddresssResponse.status === 200) {
          userContactsListFromApi();
          toast.success('Endereço atualizado');
        }
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  const handleDeleteContact = async () => {
    if (token !== null) {
      try {
        const deleteContactResponse: AxiosResponse = await api.delete(
          `/contacts/${contactDetails.id}`,
          headersAuth
        );

        if (deleteContactResponse.status === 204) {
          userContactsListFromApi();
          toast.success('Contato removido');
        }
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        userContactsListFromApi,
        contactsList,
        handleCreateContact,
        getContactDetails,
        contactDetails,
        handleUpdateContactName,
        handleDeleteContact,
        handleUpdateContactEmail,
        handleUpdateContactPhone,
        handleUpdateAddress
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };

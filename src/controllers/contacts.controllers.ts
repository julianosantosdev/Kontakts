import { TCreateUpdateEmailRequest } from '../interfaces/contacts.interface';
import deleteEmailService from '../services/contacts/deleteEmail.service';
import updateEmailService from '../services/contacts/updateEmail.service';
import {
  TAddressUpdate,
  TCreateAddressRequest,
  TFullNameRequest,
  createNewAddressService,
  createContactService,
  deleteAddressService,
  deleteContactService,
  listContactsService,
  updateAddressService,
  updateFullNameService,
  createNewAEmailService,
} from './index.controllers';
import { Request, Response } from 'express';

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newContactData = request.body;
  const userId: number = Number(response.locals.userId);
  const newContact = await createContactService(newContactData, userId);
  return response.status(201).json(newContact);
};

const listContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const list = await listContactsService();
  return response.status(200).json(list);
};

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const contactToDelete = await deleteContactService(contactId);
  return response.status(204).json(contactToDelete);
};

const updateFullNameController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const nameId: number = Number(request.params.fnId);
  const newFullName: TFullNameRequest = request.body;
  const nameUpdated = await updateFullNameService(nameId, newFullName);
  return response.status(200).json(nameUpdated);
};

const createNewAddressController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const newAddressData: TCreateAddressRequest = request.body;
  const addressCreated = await createNewAddressService(
    contactId,
    newAddressData
  );
  return response.status(200).json(addressCreated);
};

const updateAddressController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const addressId: number = Number(request.params.addressId);
  const newAddressData: TAddressUpdate = request.body;
  const addressUpdated = await updateAddressService(addressId, newAddressData);
  return response.status(200).json(addressUpdated);
};

const deleteAddressController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const addressId: number = Number(request.params.addressId);
  const addressToDelete = await deleteAddressService(addressId);
  return response.status(204).json(addressToDelete);
};

const createEmailController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const newEmailData: TCreateUpdateEmailRequest = request.body;
  const emailCreated = await createNewAEmailService(contactId, newEmailData);
  return response.status(200).json(emailCreated);
};

const updateEmailController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const emailId: number = Number(request.params.emailId);
  const newEmailData: TCreateUpdateEmailRequest = request.body;
  const emailUpdated = await updateEmailService(emailId, newEmailData);
  return response.status(200).json(emailUpdated);
};

const deleteEmailController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const emailId: number = Number(request.params.emailId);
  const emailToDelete = await deleteEmailService(emailId);
  return response.status(204).json(emailToDelete);
};

export {
  createContactController,
  listContactsController,
  deleteContactController,
  updateFullNameController,
  createNewAddressController,
  updateAddressController,
  deleteAddressController,
  createEmailController,
  updateEmailController,
  deleteEmailController,
};

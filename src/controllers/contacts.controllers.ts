import * as index from './index.controllers';
import { Request, Response } from 'express';

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newContactData = request.body;
  const userId: number = Number(response.locals.userId);
  const newContact = await index.createContactService(newContactData, userId);
  return response.status(201).json(newContact);
};

const listContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(response.locals.userId)
  const list = await index.listContactsService(userId);
  return response.status(200).json(list);
};

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const contactToDelete = await index.deleteContactService(contactId);
  return response.status(204).json(contactToDelete);
};

const updateFullNameController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const nameId: number = Number(request.params.fnId);
  const newFullName: index.TFullNameRequest = request.body;
  const nameUpdated = await index.updateFullNameService(nameId, newFullName);
  return response.status(200).json(nameUpdated);
};

const createNewAddressController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const newAddressData: index.TCreateAddressRequest = request.body;
  const addressCreated = await index.createNewAddressService(
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
  const newAddressData: index.TAddressUpdateRequest = request.body;
  const addressUpdated = await index.updateAddressService(
    addressId,
    newAddressData
  );
  return response.status(200).json(addressUpdated);
};

const deleteAddressController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const addressId: number = Number(request.params.addressId);
  const addressToDelete = await index.deleteAddressService(addressId);
  return response.status(204).json(addressToDelete);
};

const createEmailController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const newEmailData: index.TCreateUpdateEmailRequest = request.body;
  const emailCreated = await index.createNewAEmailService(
    contactId,
    newEmailData
  );
  return response.status(200).json(emailCreated);
};

const updateEmailController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const emailId: number = Number(request.params.emailId);
  const newEmailData: index.TCreateUpdateEmailRequest = request.body;
  const emailUpdated = await index.updateEmailService(emailId, newEmailData);
  return response.status(200).json(emailUpdated);
};

const deleteEmailController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const emailId: number = Number(request.params.emailId);
  const emailToDelete = await index.deleteEmailService(emailId);
  return response.status(204).json(emailToDelete);
};

const createPhoneController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.contactId);
  const newPhoneData: index.TCreateUpdatePhoneRequest = request.body;
  const PhoneCreated = await index.createNewPhoneService(
    contactId,
    newPhoneData
  );
  return response.status(200).json(PhoneCreated);
};

const updatePhoneController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const phoneId: number = Number(request.params.phoneId);
  const newPhoneData: index.TCreateUpdatePhoneRequest = request.body;
  const PhoneUpdated = await index.updatePhoneService(phoneId, newPhoneData);
  return response.status(200).json(PhoneUpdated);
};

const deletePhoneController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const phoneId: number = Number(request.params.phoneId);
  const phoneToDelete = await index.deletePhoneService(phoneId);
  return response.status(204).json(phoneToDelete);
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
  createPhoneController,
  updatePhoneController,
  deletePhoneController,
};

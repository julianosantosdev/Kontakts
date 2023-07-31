import { Request, Response } from 'express';
import createContactService from '../services/contacts/createContact.service';
import listContactsService from '../services/contacts/listContacts.service';
import updateContactService from '../services/contacts/updateContact.service';
import deleteContactService from '../services/contacts/deleteContact.service';

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

const updateContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const list = await updateContactService();
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

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController
};

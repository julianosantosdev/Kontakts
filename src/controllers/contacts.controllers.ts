import { Request, Response } from 'express';
import createContactService from '../services/contacts/createContact.service';
import listContactsService from '../services/contacts/listContacts.service';

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

export { createContactController, listContactsController };

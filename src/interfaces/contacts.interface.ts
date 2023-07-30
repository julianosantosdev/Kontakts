import { z } from 'zod';
import {
  contactRequestSchema,
  createContactResponseSchema,
} from '../schemas/contacts.schemas';

type TContactRequest = z.infer<typeof contactRequestSchema>;
type TCreateContactResponse = z.infer<typeof createContactResponseSchema>;

export { TContactRequest, TCreateContactResponse };

import { z } from 'zod';
import {
  addressCreateUpdateSchema,
  contactRequestSchema,
  createContactResponseSchema,
  emailCreateUpdateRequest,
  emailSchema,
  fullNameRequestSchema,
} from '../schemas/contacts.schemas';
import { DeepPartial } from 'typeorm';

type TContactRequest = z.infer<typeof contactRequestSchema>;
type TCreateContactResponse = z.infer<typeof createContactResponseSchema>;

type TFullNameRequest = z.infer<typeof fullNameRequestSchema>;

type TCreateAddressRequest = z.infer<typeof addressCreateUpdateSchema>;
type TAddressUpdate = DeepPartial<typeof addressCreateUpdateSchema>;

type TEmail = z.infer<typeof emailSchema>;
type TCreateUpdateEmailRequest = z.infer<typeof emailCreateUpdateRequest>;

export {
  TContactRequest,
  TCreateContactResponse,
  TFullNameRequest,
  TCreateAddressRequest,
  TAddressUpdate,
  TEmail,
  TCreateUpdateEmailRequest,
};

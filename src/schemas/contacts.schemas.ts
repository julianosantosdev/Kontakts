import { z } from 'zod';
import { userSchema } from './users.schemas';

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(50),
  number: z.string().max(7).nullable(),
  city: z.string().max(30),
  state: z.string().max(2),
  createdAt: z.string(),
  updatedAt: z.string(),
  contact: z.number(),
});

const addressCreateSchema = addressSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  contact: true,
});

const addressUpdateSchema = addressCreateSchema.partial();

const phoneSchema = z.object({
  id: z.number(),
  phone: z.string().max(20),
  createdAt: z.string(),
  contact: z.number(),
});

const phoneCreateUpdateRequest = phoneSchema.pick({ phone: true });

const emailSchema = z.object({
  id: z.number(),
  email: z.string().max(50),
  createdAt: z.string(),
  contact: z.number(),
});

const emailCreateUpdateRequest = emailSchema.pick({ email: true });

const fullNameSchema = z.object({
  id: z.number(),
  fullName: z.string().max(50),
  createdAt: z.string(),
});

const contactSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  fullName: z.number(),
  user: userSchema,
});

const contactRequestSchema = z.object({
  fullName: z.string().max(50),
  email: z.string().max(50),
  phone: z.string().max(20),
  address: addressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    contact: true,
  }),
});

const createContactResponseSchema = contactSchema
  .extend({
    fullName: fullNameSchema,
    address: addressSchema.omit({ contact: true }),
    phone: phoneSchema.omit({ contact: true }),
    email: emailSchema.omit({ contact: true }),
  })
  .omit({ user: true });

const contactsListSchema = contactSchema
  .extend({
    fullName: fullNameSchema,
    emails: emailSchema.omit({ contact: true }).array(),
    phones: phoneSchema.omit({ contact: true }).array(),
    addresses: addressSchema.omit({ contact: true }).array(),
  })
  .omit({ user: true })

const contactsListResponseSchema = z.array(contactsListSchema);

const fullNameRequestSchema = fullNameSchema.omit({
  createdAt: true,
  id: true,
});

export {
  addressSchema,
  addressCreateSchema,
  addressUpdateSchema,
  phoneSchema,
  phoneCreateUpdateRequest,
  emailSchema,
  emailCreateUpdateRequest,
  fullNameSchema,
  contactSchema,
  contactRequestSchema,
  createContactResponseSchema,
  contactsListResponseSchema,
  fullNameRequestSchema,
};

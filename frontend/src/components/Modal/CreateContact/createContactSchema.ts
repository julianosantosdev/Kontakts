import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().max(50),
  number: z.string().max(7).nullable(),
  city: z.string().max(30),
  state: z.string().max(2)
});

const createContactFormSchema = z.object({
  fullName: z.string().max(50).nonempty('Campo obrigatório'),
  email: z.string().email('Campo obrigatório').max(50),
  phone: z.string().max(20).nonempty('Campo obrigatório'),
  street: z.string().max(50),
  number: z.string().max(7).nullable(),
  city: z.string().max(30),
  state: z.string().max(2)
});

const createContactSchema = z.object({
  fullName: z.string().max(50).nonempty('Campo obrigatório'),
  email: z.string().email('Campo obrigatório').max(50),
  phone: z.string().max(20).nonempty('Campo obrigatório'),
  address: addressSchema
});
type ICreateContact = z.infer<typeof createContactSchema>;
type ICreateFormContact = z.infer<typeof createContactFormSchema>;
export { createContactFormSchema, addressSchema, createContactSchema };
export type { ICreateContact, ICreateFormContact };

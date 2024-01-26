import { z } from 'zod';

const updateUserSchema = z
  .object({
    fullName: z.string().max(50).nonempty('Campo obrigatório'),
    email: z.string().email('Campo obrigatório').max(50),
    phone: z.string().max(20).nonempty('Campo obrigatório'),
    password: z
      .string()
      .min(4, 'Senha deve ter mais de 4 caracteres')
      .nonempty('Insira sua senha')
  })
  .partial();

type IUpdataUserData = z.infer<typeof updateUserSchema>;
export default updateUserSchema;
export type { IUpdataUserData };

import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Insira seu email'),
  password: z
    .string()
    .min(4, 'Senha deve ter mais de 4 caracteres')
    .nonempty('Insira sua senha')
});

type ILoginData = z.infer<typeof loginSchema>;
export default loginSchema;
export type { ILoginData };

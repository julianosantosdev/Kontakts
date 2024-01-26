import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IInputData {
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  errors?: FieldError;
  value?: string | number;
  readOnly?: boolean;
  disabled?: boolean;
}

export type { IInputData };

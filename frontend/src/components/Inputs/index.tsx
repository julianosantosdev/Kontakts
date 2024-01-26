import { FC } from 'react';
import { Fieldset } from './styles';
import { ZodErrorMsg } from '../../styles/ErrorMsg';
import { IInputData } from './types';

const Input: FC<IInputData> = ({
  name,
  label,
  placeholder,
  type,
  register,
  errors,
  value,
  readOnly,
  disabled
}) => {
  return (
    <Fieldset>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        {...register}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
      />
      {errors && <ZodErrorMsg>{errors.message}</ZodErrorMsg>}
    </Fieldset>
  );
};

export { Input };

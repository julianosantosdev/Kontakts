import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Inputs';
import { ButtonYellow } from '../../../styles/Button';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  ICreateFormContact,
  createContactFormSchema
} from './createContactSchema';
import { ContactsContext } from '../../../contexts/ContactsContext';

const CreateContact = () => {
  const { handleCreateContact } = useContext(ContactsContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateFormContact>({
    resolver: zodResolver(createContactFormSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleCreateContact)}>
        <Input
          name={'fullName'}
          label={'Nome'}
          placeholder={'Nome'}
          type={'text'}
          register={register('fullName')}
          errors={errors.fullName || undefined}
        />
        <Input
          name={'email'}
          label={'E-mail'}
          placeholder={'Email'}
          type={'text'}
          register={register('email')}
          errors={errors.email || undefined}
        />
        <Input
          name={'phone'}
          label={'Telefone'}
          placeholder={'Telefone'}
          type={'text'}
          register={register('phone')}
          errors={errors.phone || undefined}
        />
        <Input
          name={'street'}
          label={'Rua'}
          placeholder={'Rua'}
          type={'text'}
          register={register('street')}
          errors={errors.street || undefined}
        />
        <Input
          name={'number'}
          label={'Número'}
          placeholder={'Número'}
          type={'text'}
          register={register('number')}
          errors={errors.number || undefined}
        />
        <Input
          name={'city'}
          label={'Cidade'}
          placeholder={'Cidade'}
          type={'text'}
          register={register('city')}
          errors={errors.city || undefined}
        />
        <Input
          name={'state'}
          label={'Estado'}
          placeholder={'Ex: SP, MG...'}
          type={'text'}
          register={register('state')}
          errors={errors.state || undefined}
        />
        <ButtonYellow className='button__create'>Criar</ButtonYellow>
      </form>
    </>
  );
};

export { CreateContact };

import { useContext } from 'react';
import { ContactsContext } from '../../../../contexts/ContactsContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../Inputs';
import { ButtonSave } from '../../../../styles/Button';
import { z } from 'zod';
import { BiSave } from 'react-icons/bi';

const contactAddressUpdateSchema = z.object({
  street: z.string().max(50).nonempty('Informe a nova rua'),
  number: z.string().max(7).nullable(),
  city: z.string().max(30).nonempty('Informe a nova cidade'),
  state: z.string().max(2).nonempty('Informe o novo Estado')
});
export type IUpdateContactAddress = z.infer<typeof contactAddressUpdateSchema>;

const EditContactAddres = () => {
  const { contactDetails, handleUpdateAddress } = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUpdateContactAddress>({
    resolver: zodResolver(contactAddressUpdateSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateAddress)}>
        <h4>Endereço</h4>
        <Input
          name={'street'}
          label={'Rua'}
          placeholder={contactDetails.addresses[0].street}
          type={'text'}
          register={register('street')}
          errors={errors.street || undefined}
        />
        <Input
          name={'number'}
          label={'Número'}
          placeholder={contactDetails.addresses[0].number}
          type={'text'}
          register={register('number')}
          errors={errors.number || undefined}
        />
        <Input
          name={'city'}
          label={'Cidade'}
          placeholder={contactDetails.addresses[0].city}
          type={'text'}
          register={register('city')}
          errors={errors.city || undefined}
        />
        <Input
          name={'state'}
          label={'Estado'}
          placeholder={contactDetails.addresses[0].state}
          type={'text'}
          register={register('state')}
          errors={errors.state || undefined}
        />
        <ButtonSave className='button__create' type='submit'>
          <BiSave className={'saveBtn'} />
          Atualizar
        </ButtonSave>
      </form>
    </>
  );
};

export { EditContactAddres };

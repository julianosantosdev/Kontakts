import { useContext } from 'react';
import { z } from 'zod';
import { ContactsContext } from '../../../../contexts/ContactsContext';
import { Input } from '../../../Inputs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonSave } from '../../../../styles/Button';
import { BiSave } from 'react-icons/bi';

const updateContactPhoneSchema = z.object({
  phone: z.string().max(20).nonempty('Informe um email válido')
});
export type IEditContactPhone = z.infer<typeof updateContactPhoneSchema>;

const EditContactPhone = () => {
  const { contactDetails, handleUpdateContactPhone } =
    useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IEditContactPhone>({
    resolver: zodResolver(updateContactPhoneSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateContactPhone)}>
        <h4>Telefones:</h4>

        <Input
          name={'phone'}
          label={'Telefone'}
          placeholder={contactDetails.emails[0].email}
          type={'text'}
          register={register('phone')}
          errors={errors.phone || undefined}
        />
        <ButtonSave className='button__create' type='submit'>
          <BiSave className={"saveBtn"} />
          Atualizar
        </ButtonSave>
      </form>
    </>
  );
};

export { EditContactPhone };

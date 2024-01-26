import { useContext } from 'react';
import { ContactsContext } from '../../../../contexts/ContactsContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../Inputs';
import { ButtonSave } from '../../../../styles/Button';
import { BiSave } from 'react-icons/bi';

const updateContactEmailSchema = z.object({
  email: z.string().email('Informe um email válido')
});
export type IContactEmail = z.infer<typeof updateContactEmailSchema>;

const EditContactEmail = () => {
  const { contactDetails, handleUpdateContactEmail } =
    useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IContactEmail>({
    resolver: zodResolver(updateContactEmailSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateContactEmail)}>
        <h4>Emails</h4>

        <Input
          name={'email'}
          label={'E-mail'}
          placeholder={contactDetails.emails[0].email}
          type={'text'}
          register={register('email')}
          errors={errors.email || undefined}
        />
        <ButtonSave className='button__create' type='submit'>
          <BiSave className={"saveBtn"}/>
          Atualizar
        </ButtonSave>
      </form>
    </>
  );
};

export { EditContactEmail };

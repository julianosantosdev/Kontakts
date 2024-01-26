import { useForm } from 'react-hook-form';
import { ButtonSave } from '../../../../styles/Button';
import { Input } from '../../../Inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContext } from 'react';
import { ContactsContext } from '../../../../contexts/ContactsContext';
import { BiSave } from 'react-icons/bi';

const fullNameSchema = z.object({
  fullName: z.string().max(50).nonempty('Campo obrigatório')
});
export type IFullName = z.infer<typeof fullNameSchema>;

const EditContactName = () => {
  const { contactDetails, handleUpdateContactName } =
    useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFullName>({
    resolver: zodResolver(fullNameSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateContactName)}>
        <h4>Dados do contato</h4>
        <Input
          name={'fullName'}
          label={'Nome'}
          placeholder={contactDetails.fullName.fullName}
          type={'text'}
          register={register('fullName')}
          errors={errors.fullName || undefined}
        />
        <ButtonSave className='button__create' type='submit'>
          <BiSave className={"saveBtn"}/>
          Atualizar
        </ButtonSave>
      </form>
    </>
  );
};

export { EditContactName };

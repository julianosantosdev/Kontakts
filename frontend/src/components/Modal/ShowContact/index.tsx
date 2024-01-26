import { useContext } from 'react';
import { ContactsContext } from '../../../contexts/ContactsContext';
import { ButtonYellow } from '../../../styles/Button';
import { ModalContext } from '../../../contexts/ModalContext';
import ContactDetails from './styles';

const ShowContact = () => {
  const { contactDetails, handleDeleteContact } = useContext(ContactsContext);
  const { handleShowModal, handleCloseModal } = useContext(ModalContext);

  const { fullName, emails, phones, addresses } = contactDetails;
  const { city, number, state, street } = addresses[0];
  return (
    <>
      <ContactDetails>
        <div>
          <h1>Nome:</h1>
          <p>{fullName.fullName}</p>
        </div>
        <div>
          <h1>Telefone:</h1>
          <p>{phones[0].phone}</p>
        </div>
        <div>
          <h1>Telefone:</h1>
          <p>{emails[0].email}</p>
        </div>
        <div>
          <h1>Endereço:</h1>
          <p>
            {street}, {number}, Cidade: {city}, Estado: {state}
          </p>
        </div>

        <ButtonYellow
          onClick={() => handleShowModal('editContact')}
          className='button__create'
          type='button'
        >
          Editar
        </ButtonYellow>

        <ButtonYellow
          onClick={() => {
            handleDeleteContact(), handleCloseModal();
          }}
          className='button__create'
          type='button'
        >
          Deletar
        </ButtonYellow>
      </ContactDetails>
    </>
  );
};

export { ShowContact };

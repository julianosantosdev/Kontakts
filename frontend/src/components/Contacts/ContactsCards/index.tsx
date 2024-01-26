import { ContactsContext } from '../../../contexts/ContactsContext';
import { ModalContext } from '../../../contexts/ModalContext';
import { ContactCardLi } from './styles';
import { FC, useContext } from 'react';

interface IContactCardProps {
  id: number;
  fullName: string;
  createdAt: string;
}

const ContactCard: FC<IContactCardProps> = ({ fullName, createdAt, id }) => {
  const { handleShowModal } = useContext(ModalContext);
  const { getContactDetails } = useContext(ContactsContext);

  return (
    <ContactCardLi
      onClick={() => {
        handleShowModal('showContact');
        getContactDetails(id);
      }}
    >
      <h3>{fullName}</h3>
      <p className='font-color-gray-1 font-size-3'>{`Criação: ${createdAt}`}</p>
    </ContactCardLi>
  );
};

export { ContactCard };

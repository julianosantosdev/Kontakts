import { useContext } from 'react';
import { ContactsContext } from '../../../contexts/ContactsContext';
import { v4 as uuidv4 } from 'uuid';
import { CardListUl, NoContactsStyle } from './styles';
import { IContact } from '../../../contexts/ContactsContext/types';
import { ContactCard } from '../ContactsCards';

function CardsList() {
  const { contactsList } = useContext(ContactsContext);

  const userContacts = contactsList.map((contact: IContact) => {
    const { fullName, createdAt, id } = contact;
    return (
      <ContactCard
        key={uuidv4()}
        id={id}
        fullName={fullName.fullName}
        createdAt={createdAt}
      />
    );
  });

  return (
    <>
      {userContacts.length === 0 ? (
        <NoContactsStyle>
          <h2>Cadastre um contato e ele aparecerá aqui</h2>
        </NoContactsStyle>
      ) : (
        <CardListUl>{userContacts}</CardListUl>
      )}
    </>
  );
}

export { CardsList };

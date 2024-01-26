import { useContext, useEffect } from 'react';
import { ContactsContext } from '../../contexts/ContactsContext';
import { Container, Header, SectionDashBoard } from './styles';
import { TitleLogo } from '../../components/TitleLogo';
import { ButtonGray } from '../../styles/Button';
import { UserContext } from '../../contexts/UserContext';
import { CardsList } from '../../components/Contacts/ContactsList';
import { ModalContext } from '../../contexts/ModalContext';
import { GenericModal } from '../../components/Modal/ModalGeneric';

const DashboardPage = () => {
  const { handleLogout, retrieveUser, userData } = useContext(UserContext);
  const { userContactsListFromApi } = useContext(ContactsContext);
  const { showModal, handleShowModal } = useContext(ModalContext);

  useEffect(() => {
    userContactsListFromApi();
    retrieveUser();
  }, []);

  return (
    <>
      {showModal && <GenericModal type={showModal} />}
      <Header>
        <Container>
          <nav>
            <TitleLogo />
            <ButtonGray className='font-size-2' onClick={handleLogout}>
              Sair
            </ButtonGray>
          </nav>
        </Container>

        <div className='header__userInfo'>
          <Container>
            <div className='dashboard__userDetails'>
              <h2>Bem-vindo, {userData.fullName}</h2>
              <p className='font-size-2 font-color-gray-1'>{`Usuário desde ${userData.createdAt}`}</p>
              <ButtonGray
                onClick={() => handleShowModal('edit')}
                className='font-size-2 font-color-gray-0'
              >
                Editar Perfil
              </ButtonGray>
            </div>
          </Container>
        </div>
      </Header>

      <main>
        <Container>
          <SectionDashBoard>
            <ButtonGray
              onClick={() => {
                handleShowModal('create');
              }}
              className='font-bold font-size-2'
            >
              Criar Kontato
            </ButtonGray>
            <CardsList />
          </SectionDashBoard>
        </Container>
      </main>
    </>
  );
};

export default DashboardPage;

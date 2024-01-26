import { useContext } from 'react';
import { ButtonYellow } from '../../../styles/Button';
import StyledSectionDelete from './styles';
import { UserContext } from '../../../contexts/UserContext';
import { ModalContext } from '../../../contexts/ModalContext';

const DeleteConfirmation = () => {
  const { handleDeleteUser } = useContext(UserContext);
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <StyledSectionDelete>
      <h2>DESEJA MESMO DELETAR?</h2>
      <p className='font-color-primary font-size-1'>
        Nao será possível desfazer essa ação e todos seus contatos serão
        apagados!
      </p>
      <ButtonYellow
        onClick={() => {
          handleDeleteUser(), handleCloseModal();
        }}
      >
        CONFIRMAR
      </ButtonYellow>
    </StyledSectionDelete>
  );
};

export default DeleteConfirmation;

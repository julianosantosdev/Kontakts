import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';
import { Button } from '../../../styles/Button';

interface iModalTitle {
  title: string;
}

const ModalHeader = ({ title }: iModalTitle) => {
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <div className='modalHeader'>
      <h3 className='heading-3'>{title}</h3>
      <Button
        onClick={() => {
          handleCloseModal();
        }}
      >
        X
      </Button>
    </div>
  );
};

export { ModalHeader };

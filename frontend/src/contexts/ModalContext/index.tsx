import { createContext, useEffect, useRef, useState } from 'react';
import { iModalContext, iModalContextProps } from './types';

const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalContextProps) => {
  const [showModal, setShowModal] = useState<null | string>(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleModalOutClick = (event: Event) => {
      if (ref.current === event.target) {
        setShowModal(null);
      }
    };
    window.addEventListener('click', handleModalOutClick);

    return () => {
      window.removeEventListener('click', handleModalOutClick);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(null);
  };

  const handleShowModal = (type: string | null) => {
    setShowModal(type);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        handleShowModal,
        handleCloseModal,
        ref
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };

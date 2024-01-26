interface IGenericModalProps {
  type: string | null;
}

interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalType {
  modalType: string | null;
}

interface iModalContext {
  setShowModal: React.Dispatch<React.SetStateAction<null | string>>;
  showModal: string | null;
  handleShowModal: (type: string | null) => void;
  handleCloseModal: () => void;
  ref: React.MutableRefObject<null>;
}

interface IInput {
  type: string;
  placeholder: string;
  id: string;
}

export type {
  IGenericModalProps,
  iModalContextProps,
  iModalType,
  iModalContext,
  IInput
};

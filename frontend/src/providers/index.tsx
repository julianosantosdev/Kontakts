import { ContactsProvider } from '../contexts/ContactsContext';
import { ModalProvider } from '../contexts/ModalContext';
import { UserProvider } from '../contexts/UserContext';
import { IProviderProps } from '../types';

const Providers = ({ children }: IProviderProps) => {
  return (
    <ContactsProvider>
      <UserProvider>
        <ModalProvider>{children}</ModalProvider>
      </UserProvider>
    </ContactsProvider>
  );
};

export default Providers;

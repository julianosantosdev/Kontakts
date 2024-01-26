import { EditContactAddres } from './EditContactFields/EditAddress';
import { EditContactEmail } from './EditContactFields/EditEmail';
import { EditContactName } from './EditContactFields/EditName';
import { EditContactPhone } from './EditContactFields/EditPhone';
import StyledSection from './styles';

const EditContact = () => {
  return (
    <>
      <StyledSection >
        <EditContactName />
        <EditContactEmail />
        <EditContactPhone />
        <EditContactAddres />
      </StyledSection>
    </>
  );
};

export { EditContact };

import styled from 'styled-components';

const ContactCardLi = styled.li`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-radius: inherit;
  width: 100%;
  background-color: var(--color-grey-2);
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: var(--color-secondary);
    scale: 105%;
  }

  @media (min-width: 640px) {
    height: 7rem;
    min-width: 45%;
    max-width: 48%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
  }
`;

export { ContactCardLi };

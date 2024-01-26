import styled from 'styled-components';

const CardListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1rem;
  background-color: var(--color-grey-3);
  width: 100%;
  border-radius: 4px;
  margin: 32px 0;

  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
  }
`;

const NoContactsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-2);
  border-radius: 4px;
  margin: 16px 0;

  h2,
  p {
    margin: 16px;
  }
`;

export { CardListUl, NoContactsStyle };

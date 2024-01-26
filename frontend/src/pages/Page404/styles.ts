import styled from 'styled-components';

const SectionPage404 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  a {
    width: 100%;
    max-width: 15rem;
    background-color: var(--color-primary);
    color: var(--color-grey-4);
  }

  p,
  h1,
  h2 {
    text-align: center;
  }
`;
export { SectionPage404 };

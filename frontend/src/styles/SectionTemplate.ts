import styled from "styled-components";

const SectionTemplate = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  width: 85%;

  .form__container {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-3);
    padding: 1rem;
    border-radius: 4px;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export { SectionTemplate };

import styled from 'styled-components';

const ModalContainer = styled.section`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

  .modalBody {
    max-width: 23rem;
    max-height: fit-content;
    min-height: 16rem;
    width: 85%;
    background-color: var(--color-grey-4);
    border-radius: 4px;

  }

  .modalHeader {
    background-color: var(--color-secondary);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 4px 4px 0 0;

    button {
      background-color: transparent;
      border: none;
      color: var(--color-white);
      font-size: 16px;
      width: 4px;
      height: 4px;
      padding: 10px;
    }
  }

  form {
    padding: 32px 1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .form__buttonsContainer {
      display: flex;
      flex-direction: row;
      gap: 16px;

      button:first-child {
        width: 65%;
      }

      button:nth-child(2) {
        width: 45%;
        background-color: var(--color-negative)
      }
    }
  }

  @keyframes modalAppear {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }

  .slideDown {
    animation: modalAppear;
    animation-duration: 0.5s;
  }
`;

export { ModalContainer };

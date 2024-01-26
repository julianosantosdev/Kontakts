import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  margin: 0 auto;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    width: 85%;
  }

  .header__userInfo {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--color-secondary);
    border-bottom: 1px solid var(--color-secondary);
    padding: 2rem 0;
  }

  .dashboard__userDetails {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    flex-wrap: wrap;
    width: 85%;
  }
`;

const SectionDashBoard = styled.section`
  width: 85%;
  border-radius: 4px;
  margin: 32px 0;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-3);
  padding: 10px 0 10px 0;

  button {
    background-color: var(--color-secondary);
  }
`;

export { Container, SectionDashBoard, Header };

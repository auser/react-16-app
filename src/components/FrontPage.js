import styled from 'styled-components';

export const FrontPage = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 425px) {
    align-items: center;
  }
`;

export default FrontPage;

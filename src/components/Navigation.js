import styled from 'styled-components';

export const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    overflow-y: hidden;
    transition: all 0.15s ease;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Navigation;

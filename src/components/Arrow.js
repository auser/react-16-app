import styled from 'styled-components';
// import MenuIcon from '../assets/Menu.svg';

export const Arrow = styled.div`
  display: none;
  width: 28px;
  height: 20px;
  color: #dd1d64;
  z-index: 1;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    display: inline;
  }
`;

export default Arrow;

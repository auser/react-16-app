import styled from 'styled-components';
// import MenuIcon from '../assets/Menu.svg';

export const ModalBox = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Modal = props => {
  const MOUNT = document.querySelector('#modal-box');
  return <div>{ReactDOM.unstable_createPortal(<ModalBox />, MOUNT)}</div>;
};

export default Modal;

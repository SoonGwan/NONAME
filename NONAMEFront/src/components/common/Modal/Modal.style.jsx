import styled from 'styled-components';

export const ModalStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media screen and (min-width: 480px) {
    width: 100% !important;
    height: 70% !important;
  }
`;

export const PostBackGround = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #000;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalWrap = styled.div`
  padding: 20px;
  border-radius: 6 px;
  width: 640px;
  height: 1024px;
  background-color: white;
  z-index: 100;
  @media screen and (min-width: 480px) {
    width: 100% !important;
    height: 70% !important;
  }
`;

export const ModalCancel = styled.div`
  padding: 4.5px 0px 4.5px 0px;
  text-align: right;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
`;

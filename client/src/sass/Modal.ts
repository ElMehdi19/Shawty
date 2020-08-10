import styled, { keyframes } from "styled-components";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const modalKeyFrames = keyframes`
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(100px);
  }
`;

export const StyledModal = styled.div`
  background-color: #fff;
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  margin: 0 auto;
  box-sizing: border-box;
  animation: ${modalKeyFrames} 1s linear 0s both;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ModalWrapper;

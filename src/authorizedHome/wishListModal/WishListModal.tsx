import React from "react";
import styled from "styled-components";
import { Close } from "../../assets";

const Modal = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: rgb(200, 200, 200, 0.3);
`;
const ModalBody = styled.div`
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 24px;
  border-radius: 12px;
`;
const ModalHeader = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 10px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral06}`};
`;
const ModalClose = styled(Close)`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  padding: 24px 0;
`;
const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalButton = styled.button<{ secondary?: boolean }>`
  padding: 14px 24px;
  border-radius: 12px;
  background-color: ${({ theme, secondary }) =>
    ` ${secondary ? `${theme.colors.shade01}` : `${theme.colors.shade02}`}`};
  color: ${({ theme, secondary }) =>
    ` ${secondary ? `${theme.colors.shade02}` : `${theme.colors.shade01}`}`};
  border: none;
  text-decoration: ${({ secondary }) =>
    `${secondary ? "underline" : undefined}`};
`;

export const Input = styled.div`
  position: relative;
  input {
    padding: 20px 5px;
    border-radius: 12px;
    width: 100%;
    font-size: ${({ theme }) => `${theme.fontSize.xl}`};
  }
  label {
    position: absolute;
    top: 22px;
    left: 7px;
    font-size: ${({ theme }) => `${theme.fontSize.xl}`};
    transition: 0.04s;
  }
  &:focus-within {
    label {
      font-size: ${({ theme }) => `${theme.fontSize.s}`};
      top: 5px;
    }
  }
  &:focus {
    outline: ${({ theme }) => `${theme.colors.shade01}`};
  }
`;

const WishListModal = () => {
  return (
    <Modal>
      <ModalBody>
        <ModalHeader>
          <ModalClose />
          <h1>Create wishlist</h1>
        </ModalHeader>
        <form action="">
          <ModalContent>
            <Input>
              <input type="text" name="" id="" />
              <label htmlFor="">Name</label>
            </Input>
          </ModalContent>
          <ModalAction>
            <ModalButton secondary={true}>Clear</ModalButton>
            <ModalButton type="submit">Aceptar</ModalButton>
          </ModalAction>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default WishListModal;

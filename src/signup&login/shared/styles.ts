import styled from "styled-components";
import { Button } from "../types";
export const SignupButton = styled.button<Button>`
  border-radius: 12px;
  padding: 10px 0;
  color: ${({ theme, action }) =>
    action === "secondary"
      ? `${theme.colors.shade02}`
      : `${theme.colors.shade01}`};
  background: ${({ theme, action }) =>
    action === "secondary"
      ? `${theme.colors.shade01}`
      : `linear-gradient(to right, ${theme.colors.gradient03})`};
`;
export const SignupInput = styled.div`
  position: relative;
  border-radius: 12px;
  input {
    padding: 20px 5px;
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
export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;

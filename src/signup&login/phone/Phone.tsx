import styled from "styled-components";
import { Button } from "../types";
const SignupButton = styled.button<Button>`
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
const SignupInput = styled.div`
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
const SignupVerificationSpan = styled.span`
  text-align: initial;
  font-size: ${({ theme }) => `${theme.fontSize.base}`};
  padding-top: 10px;
  padding-bottom: 10px;
`;
const SignupSelect = styled.div`
  position: relative;
  select {
    padding: 20px 0 10px 0;
    width: 100%;
    font-size: ${({ theme }) => `${theme.fontSize.xl}`};
  }
  label {
    position: absolute;
    color: ${({ theme }) => `${theme.colors.neutral06}`};
    left: 5px;
    top: 5px;
    font-size: ${({ theme }) => `${theme.fontSize.s}`};
  }
  border-radius: 12px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Phone = () => {
  return (
    <SignupForm action="">
      <SignupSelect>
        <select name="" id="">
          <option value="">
            peru <span>(054)</span>
          </option>
          <option value="">
            paraguay <span>(692)</span>
          </option>
        </select>
        <label htmlFor="">Country/Region</label>
      </SignupSelect>
      <SignupInput>
        <input type="text" />
        <label htmlFor="">Phone Number</label>
      </SignupInput>
      <SignupVerificationSpan>
        We'll call or text you to confirm your number. Standard message and data
        rates apply. Privacy Policy
      </SignupVerificationSpan>
      <SignupButton type="submit">Continue</SignupButton>
    </SignupForm>
  );
};

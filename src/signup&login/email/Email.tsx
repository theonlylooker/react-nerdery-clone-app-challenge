import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "../types";
import axios from "axios";

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
const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;

type signUp = {
  email: string;
  password: string;
};
interface Email {
  nextStep: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  signUp: signUp;
  handleSignUpState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Email: FC<Email> = ({
  nextStep,
  handleSubmit,
  signUp,
  handleSignUpState,
}) => {
  return nextStep ? (
    <SignupForm>
      <SignupInput>
        <input
          name="password"
          id="password"
          type="text"
          value={signUp.password}
          onChange={handleSignUpState}
        />
        <label htmlFor="password">Password</label>
      </SignupInput>
    </SignupForm>
  ) : (
    <SignupForm onSubmit={handleSubmit}>
      <SignupInput>
        <input
          name="email"
          id="email"
          type="text"
          value={signUp.email}
          onChange={handleSignUpState}
        />
        <label htmlFor="email">Email</label>
      </SignupInput>
      <SignupButton>Continue</SignupButton>
    </SignupForm>
  );
};

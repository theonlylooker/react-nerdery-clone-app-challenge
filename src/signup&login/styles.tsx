import styled from "styled-components";
import { Button } from "./types";

export const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px;
`;

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
export const SignupH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  padding-bottom: 12px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral06}`};
`;
export const SignupH2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  text-align: left;
  margin-bottom: 20px;
`;

export const SignupSeparation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  hr {
    width: 100%;
    height: 1px;
  }
`;
export const SignupLink = styled.a`
  color: ${({ theme }) => `${theme.colors.shade02}`};
  margin-top: 20px;
`;
export const SignupSection = styled.div`
  padding-top: 40px;
`;

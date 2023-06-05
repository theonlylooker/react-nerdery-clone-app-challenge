import axios from "axios";
import { FC } from "react";
import { ENDPOINT, USERS } from "../../shared/API";
import { SignupInput, SignupButton, SignupFormLayout } from "../styles";

interface Email {
  handleSwitchType: (type: string) => void;
  email: string;
  handleUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Email: FC<Email> = ({ handleSwitchType, email, handleUser }) => {
  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<[]>(
        `${ENDPOINT}${USERS}?email=${email}`
      );
      const data = response.data;
      if (data.length !== 0) {
        handleSwitchType("login");
      } else {
        handleSwitchType("register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignupFormLayout onSubmit={handleContinue}>
      <SignupInput>
        <input
          name="email"
          id="email"
          type="email"
          required
          value={email}
          onChange={handleUser}
        />
        <label htmlFor="email">Email</label>
      </SignupInput>
      <SignupButton>Continue</SignupButton>
    </SignupFormLayout>
  );
};

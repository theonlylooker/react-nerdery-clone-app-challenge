import React, { useState } from "react";
import { Phone, Email } from ".";
import {
  SignupButton,
  SignupH1,
  SignupH2,
  SignupLayout,
  SignupLink,
  SignupSection,
  SignupSeparation,
} from "./styles";

export const Signup = () => {
  const [loginActive, setLoginActive] = useState(true);
  const handleAction = () => {
    setLoginActive(!loginActive);
  };
  return (
    <SignupLayout>
      <SignupH1>Log in or sign up</SignupH1>
      <SignupSection>
        <SignupH2>Welcome to Airbnb</SignupH2>
        {/* sign up/login with phone or email */}
        {loginActive ? <Phone /> : <Email />}
      </SignupSection>
      <SignupSeparation>
        <hr />
        <span>or</span>
        <hr />
      </SignupSeparation>
      <SignupButton onClick={handleAction} action="secondary">
        Continue with {loginActive ? "Email" : "Phone"}
      </SignupButton>
      <SignupLink href="#">Need Help?</SignupLink>
    </SignupLayout>
  );
};

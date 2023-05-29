import React, { useState } from "react";
import { Phone, Email } from ".";
import {
  SignupVerificationSpan,
  SignupButton,
  SignupH1,
  SignupH2,
  SignupLayout,
  SignupLink,
  SignupSection,
  SignupSeparation,
} from "./styles";
import axios from "axios";
interface register {
  accessToken: string;
  user: {
    email: string;
    id: string;
    name: string;
    picture: string;
    reviews: number;
    country: number;
    type: string;
    birthday?: Date;
    career?: string;
    estudy?: string;
    hobby?: string;
    resume?: string;
  };
}

export const Signup = () => {
  const initSignState = { email: "", password: "" };
  const [loginActive, setLoginActive] = useState(true);
  const [newUser, setnewUser] = useState(true);
  const [nextStep, setNextStep] = useState(false);
  const [email, setEmail] = useState("");
  const [signUp, setSignUp] = useState(initSignState);
  const handleAction = () => {
    setLoginActive(!loginActive);
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post<register>(
        "http://localhost:3000/register",
        signUp
      );
      const data = response.data;
      localStorage.setItem("airbnbToken", data.accessToken);
    } catch (error) {
      console.log("error");
    }
  };

  const handleSignUpState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUp({ ...signUp, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${email}`
      );
      const data = await response.data;
      if (data) {
        setnewUser(false);
      }
    } catch (error) {
      console.log(error);
    }
    if (newUser) {
      setNextStep(true);
      setEmail(email);
    }
  };

  return (
    <SignupLayout>
      <SignupH1>Log in or sign up</SignupH1>
      {signUp.email}
      {signUp.password}
      <SignupSection>
        <SignupH2>Welcome to Airbnb</SignupH2>
        {/* sign up/login with phone or email */}
        {loginActive ? (
          <Phone />
        ) : (
          <Email
            handleSubmit={handleContinue}
            nextStep={nextStep}
            signUp={signUp}
            handleSignUpState={handleSignUpState}
          />
        )}
      </SignupSection>

      {nextStep ? (
        <>
          <SignupButton onClick={handleAction}>Agree and Continue</SignupButton>
          <SignupVerificationSpan>
            By selecting Agree and continue, I agree to Airbnb's
            <a href="">Terms of Service, Payments Terms of Service</a>, and
            Nondiscrimination Policy and acknowledge the
            <a href="">Privacy Policy</a> .
          </SignupVerificationSpan>
        </>
      ) : (
        <>
          <SignupSeparation>
            <hr />
            <span>or</span>
            <hr />
          </SignupSeparation>
          <SignupButton onClick={handleAction} action="secondary">
            Continue with {loginActive ? "Email" : "Phone"}
          </SignupButton>
        </>
      )}
      <SignupLink href="#">Need Help?</SignupLink>
    </SignupLayout>
  );
};

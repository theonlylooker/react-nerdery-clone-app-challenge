import React, { useContext, useState } from "react";
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
import { SignupForm, SignupInput } from "./shared/styles";
import axios from "axios";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { register } from "./types";
import { ENDPOINT, LOGIN, REGISTER, USERS } from "../shared/API";
import useAsync from "../hooks/useAsync";
import { emailExists, login, registerUser } from "../AXIOS/functions";

export const Signup = () => {
  const initSignState = { email: "", password: "", wishlists: [] };
  const [loginActive, setLoginActive] = useState(true);
  const [newUser, setnewUser] = useState(true);
  const [nextStep, setNextStep] = useState(false);
  const [signUp, setSignUp] = useState(initSignState);
  const globalUser = useContext(UserContext);
  const navigate = useNavigate();

  const handleAction = () => {
    setLoginActive(!loginActive);
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post<register>(`${ENDPOINT}${REGISTER}`, {
        ...signUp,
      });
      const data = response.data;
      //useAsync(registerUser)
      localStorage.setItem("airbnbToken", data.accessToken);
      localStorage.setItem("airbnbUser", JSON.stringify(data.user));
      setLoginActive(!loginActive);
      globalUser.setUser(data.user);
      setSignUp(initSignState);
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${ENDPOINT}${LOGIN}`, signUp);
      const data = response.data;
      //useAsync(login);
      localStorage.setItem("airbnbToken", data.accessToken);
      localStorage.setItem("airbnbUser", JSON.stringify(data.user));
      setLoginActive(!loginActive);
      globalUser.setUser(data.user);
      setSignUp(initSignState);
      navigate("/");
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
      const response = await axios.get<[]>(
        `${ENDPOINT}${USERS}?email=${signUp.email}`
      );
      const data = response.data;
      //useAsync(emailExists)
      if (data.length !== 0) {
        setnewUser(false);
      } else {
        setNextStep(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignupLayout>
      {newUser ? (
        <>
          <SignupH1>Log in or sign up</SignupH1>
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
              <SignupButton onClick={handleRegister}>
                Agree and Continue
              </SignupButton>
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
        </>
      ) : (
        <>
          <SignupH1>Log in</SignupH1>
          <SignupForm onSubmit={handleLogin}>
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
            <SignupButton>Log In</SignupButton>
          </SignupForm>
        </>
      )}

      <SignupLink href="#">Need Help?</SignupLink>
    </SignupLayout>
  );
};

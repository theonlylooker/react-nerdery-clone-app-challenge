import React, { useState } from "react";
import { Email, Phone, Login, Signup } from "./";
import {
  SignupButton,
  SignupH1,
  SignupH2,
  SignupLayout,
  SignupLink,
  SignupSeparation,
} from "./styles";

export const Auth = () => {
  const initialUser: { email: string; password: string; wishlists: string[] } =
    {
      email: "",
      password: "",
      wishlists: [],
    };
  const [user, setUser] = useState(initialUser);
  const [typeLogin, setTypeLogin] = useState("phone");
  const [switchType, setSwitchType] = useState<string | null>(null);
  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };
  const handleTypeLogin = () => {
    typeLogin === "phone" ? setTypeLogin("email") : setTypeLogin("phone");
  };
  const handleSwitchType = (type: string) => {
    setSwitchType(type);
  };
  return (
    <SignupLayout>
      {!switchType && (
        <>
          <SignupH1>Login or Sign up</SignupH1>
          <SignupH2>Welcome to Airbnb</SignupH2>
          {typeLogin === "email" && (
            <Email
              email={user.email}
              handleUser={handleUser}
              handleSwitchType={handleSwitchType}
            />
          )}
          {typeLogin === "phone" && <Phone />}

          {typeLogin === "email" ? (
            <>
              <SignupSeparation>
                <hr />
                <span>or</span>
                <hr />
              </SignupSeparation>
              <SignupButton onClick={handleTypeLogin} action="secondary">
                Continue with Phone
              </SignupButton>
            </>
          ) : (
            <>
              <SignupSeparation>
                <hr />
                <span>or</span>
                <hr />
              </SignupSeparation>
              <SignupButton onClick={handleTypeLogin} action="secondary">
                Continue with Email
              </SignupButton>
            </>
          )}
        </>
      )}
      {switchType === "login" && <Login user={user} handleUser={handleUser} />}
      {switchType === "register" && (
        <Signup user={user} handleUser={handleUser} />
      )}
      <SignupLink href="#"> need help</SignupLink>
    </SignupLayout>
  );
};

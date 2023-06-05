import { FC } from "react";
import { useUserContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import {
  SignupButton,
  SignupFormLayout,
  SignupH1,
  SignupInput,
} from "../styles";
import { SignupVerificationSpan } from "./styles";

interface Signup {
  user: { email: string; password: string; wishlists: string[] };
  handleUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Signup: FC<Signup> = ({ user, handleUser }) => {
  const { register } = useUserContext();
  const navigate = useNavigate();
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      register(user);
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <SignupH1>Continue Signup</SignupH1>

      <SignupFormLayout onSubmit={handleSignup}>
        <SignupInput>
          <input
            name="password"
            id="password"
            type="password"
            required
            value={user.password}
            onChange={handleUser}
          />
          <label htmlFor="password">Password</label>
        </SignupInput>
        <SignupButton>Agree and Continue</SignupButton>
        <SignupVerificationSpan>
          By selecting Agree and continue, I agree to Airbnb's
          <a href="">Terms of Service, Payments Terms of Service</a>, and
          Nondiscrimination Policy and acknowledge the
          <a href="">Privacy Policy</a> .
        </SignupVerificationSpan>
      </SignupFormLayout>
    </>
  );
};

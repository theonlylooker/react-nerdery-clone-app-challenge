import { FC } from "react";
import { useUserContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import {
  SignupButton,
  SignupFormLayout,
  SignupH1,
  SignupInput,
} from "../styles";

interface Login {
  user: { email: string; password: string; wishlists: string[] };
  handleUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Login: FC<Login> = ({ user, handleUser }) => {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      login(user);
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <SignupH1>Login</SignupH1>
      <SignupFormLayout onSubmit={handleLogin}>
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
        <SignupButton>Log In</SignupButton>
      </SignupFormLayout>
    </>
  );
};

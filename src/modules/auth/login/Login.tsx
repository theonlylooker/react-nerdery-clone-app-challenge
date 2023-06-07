import { FC } from "react";
import { useUserContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import {
  SignupButton,
  SignupFormLayout,
  SignupH1,
  SignupInput,
} from "../styles";
import { useForm } from "react-hook-form";
import { FormError } from "../signup/styles";
import { Alert } from "../../../assets";

interface Login {
  user: { email: string; password: string; wishlists: string[] };
}
interface Password {
  password: string;
}

export const Login: FC<Login> = ({ user }) => {
  const { login } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Password>();

  const navigate = useNavigate();
  const handleLogin = async (data: Password, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    try {
      login({ ...user, password: data.password });
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <SignupH1>Login</SignupH1>
      <SignupFormLayout onSubmit={handleSubmit(handleLogin)}>
        <SignupInput>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "required",
            })}
          />
          <label htmlFor="password">Password</label>
        </SignupInput>
        {errors.password && (
          <FormError>
            <Alert /> {errors.password.message}
          </FormError>
        )}
        <SignupButton>Log In</SignupButton>
      </SignupFormLayout>
    </>
  );
};

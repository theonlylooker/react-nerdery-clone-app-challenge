import { SignupButton, SignupFormLayout, SignupInput } from "../styles";
import { SignupVerificationSpan } from "../signup/styles";
import { SignupSelect } from "./styles";

export const Phone = () => {
  return (
    <SignupFormLayout onSubmit={() => alert("not implemented")}>
      <SignupSelect>
        <select name="" id="">
          <option value="">
            peru <span>(054)</span>
          </option>
          <option value="">
            paraguay <span>(692)</span>
          </option>
        </select>
        <label htmlFor="">Country/Region</label>
      </SignupSelect>
      <SignupInput>
        <input type="text" />
        <label htmlFor="">Phone Number</label>
      </SignupInput>
      <SignupVerificationSpan>
        We'll call or text you to confirm your number. Standard message and data
        rates apply. Privacy Policy
      </SignupVerificationSpan>
      <SignupButton type="submit">Continue</SignupButton>
    </SignupFormLayout>
  );
};

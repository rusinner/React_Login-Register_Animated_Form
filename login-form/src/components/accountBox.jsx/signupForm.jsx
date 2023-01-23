import React from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";

export function SignupForm(props) {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Ful Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1.2em" />
      <MutedLink href="#">
        Don't have an account? <BoldLink href="#">Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

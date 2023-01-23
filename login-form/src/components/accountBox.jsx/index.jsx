import React from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(109, 25, 233);
  background: linear-gradient(
    60deg,
    rgba(109, 25, 233, 1) 20%,
    rgba(124, 102, 226, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  position: relative;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 2;
  margin: 0;
  top: 4rem;
`;

const SmallText = styled.h4`
  position: relative;
  color: #fff;
  font-size: 11px;
  z-index: 2;
  top: 4rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
`;
export function AccountBox(props) {
  return (
    <BoxContainer>
      <BackDrop />
      <TopContainer>
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>Back</HeaderText>
          <SmallText>Please Sign In to continue</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <LoginForm />
      </InnerContainer>
    </BoxContainer>
  );
}

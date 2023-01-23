import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(15, 15, 15);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid rgba(200, 200, 200, 0.1);
  padding: 0px 10px;
  outline: none;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    border-bottom: 2px solid rgb(15, 15, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: rgb(109, 25, 233);
  background: linear-gradient(
    60deg,
    rgba(109, 25, 233, 1) 20%,
    rgba(124, 102, 226, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

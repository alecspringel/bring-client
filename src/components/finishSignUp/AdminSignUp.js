import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserProvider";
import StorefrontImg from "../../assets/storefront.jpg";
import BringLogo from "../../assets/bring/red-bring-logo.svg";
import SignUpForm from "./SignUpForm";

const AdminSignUp = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  // Redirect the user if not authenticated or already signed up
  if (!user || user.first) {
    history.push("/");
  }
  return (
    <Wrapper className="flex-row">
      <ImageDiv>
        <Overlay></Overlay>
      </ImageDiv>
      <SignupDiv>
        <div className="flex-col justify align text-center">
          <img src={BringLogo} className="margin-b20" />
          <h1>Welcome to the team!</h1>
          <p className="p-large margin-b20 margin-t10">
            Sign up to start approving donations
          </p>
          <SignUpForm />
        </div>
      </SignupDiv>
    </Wrapper>
  );
};

export default AdminSignUp;

const Wrapper = styled.div`
  height: 100vh;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const ImageDiv = styled.div`
  background-image: url(${StorefrontImg});
  height: 100vh;
  min-width: 40vw;
  max-width: 1100px;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #0000005e;
`;

const SignupDiv = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

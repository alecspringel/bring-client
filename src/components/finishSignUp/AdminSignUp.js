import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserProvider";
import StorefrontImg from "../../assets/storefront.jpg";

const AdminSignUp = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  // Redirect the user if not authenticated or already signed up
  if (!user || user.first) {
    history.push("/");
  }
  return (
    <div className="flex-row" style={{ height: "100vh" }}>
      <ImageDiv></ImageDiv>
    </div>
  );
};

export default AdminSignUp;

const ImageDiv = styled.div`
  background-image: url(${StorefrontImg});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
`;

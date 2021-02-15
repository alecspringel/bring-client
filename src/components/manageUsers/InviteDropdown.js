import React, { useState } from "react";
import styled from "styled-components";
import Button from "../general/Button";
import Checkbox from "../general/Checkbox";
import TextInput from "../general/TextInput";
import axios from "axios";

const InviteDropdown = ({ users, setUsers }) => {
  const [data, setData] = useState({ isAdmin: false, email: "" });

  // Handle email input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Send invitation
  const sendInvite = () => {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/invite";
    axios
      .post(url + endpoint, data)
      .then((res) => {
        setUsers([
          ...users,
          {
            name: "Invited",
            email: data.email,
            role: data.isAdmin ? "Admin" : "User",
          },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Dropdown onClick={(e) => e.stopPropagation()} className="flex-col">
      <TitleDiv className="flex-row align justify">
        <h4>Invite New User</h4>
      </TitleDiv>
      <ContentDiv className="flex-col">
        <TextInput
          placeholder="Email address"
          name="email"
          onChange={handleChange}
        />
        <div
          className="flex-row align"
          style={{ marginLeft: 5, marginTop: 15 }}
        >
          <Checkbox
            onClick={() => setData({ ...data, isAdmin: !data.isAdmin })}
            ischecked={data.isAdmin}
            style={{ marginRight: 10 }}
          />
          Make Administrator
        </div>
        <AdminNote>
          Admins manage who is able to login to the donation portal, and manage
          important settings related to donations
        </AdminNote>
        <Button
          className="button success-btn"
          label="Send Invitation"
          style={{ marginTop: "auto" }}
          onClick={sendInvite}
        />
      </ContentDiv>
    </Dropdown>
  );
};

export default InviteDropdown;

const TitleDiv = styled.div`
  padding: 10px;
  border-bottom: 1px solid #cccccc;
`;

const ContentDiv = styled.div`
  padding: 10px;
  height: 100%;
  background: #fff;
`;

const AdminNote = styled.p`
  margin: 10px 7px;
  font-size: 14px;
`;

const Dropdown = styled.div`
  height: 300px;
  width: 300px;
  background: #fafafa;
  box-shadow: 0px 2px 2px #00000057;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;

  &::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    right: 23px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent #fafafa transparent;
  }
`;

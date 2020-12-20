import React from "react";
import UserTable from "./UserTable";
import styled from "styled-components";
import InviteButton from "./InviteButton";

const ManageUsers = () => {
  return (
    <div className="content container margin-t20">
      <UserTable />
    </div>
  );
};

export default ManageUsers;

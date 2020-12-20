import React from "react";
import UserTable from "./UserTable";
import styled from "styled-components";
import InviteButton from "./InviteButton";

const ManageUsers = () => {
  return (
    <div>
      <TableHeader className="flex-row">
        <h2>Users</h2>
        <InviteButton />
      </TableHeader>
      <UserTable />
    </div>
  );
};

export default ManageUsers;

const TableHeader = styled.div`
  padding: 16px;
`;

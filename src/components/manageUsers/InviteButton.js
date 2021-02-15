import React from "react";
import styled from "styled-components";
import Button from "../general/Button";
import Dropdown from "../general/dropdown/Dropdown";
import InviteDropdown from "./InviteDropdown";

const InviteButton = ({ data, setData }) => {
  return (
    <InviteWrapper>
      <Dropdown content={<InviteDropdown users={data} setUsers={setData} />}>
        <Button className="button dark-grey-btn" label="Invite" />
      </Dropdown>
    </InviteWrapper>
  );
};

export default InviteButton;

const InviteWrapper = styled.div`
  margin-left: auto;
`;

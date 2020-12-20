import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../general/Button";
import Dropdown from "../general/dropdown/Dropdown";
import InviteDropdown from "./InviteDropdown";

const InviteButton = () => {
  return (
    <InviteWrapper>
      <Dropdown content={<InviteDropdown />}>
        <Button className="button dark-grey-btn" label="Invite" />
      </Dropdown>
    </InviteWrapper>
  );
};

export default InviteButton;

const InviteWrapper = styled.div`
  margin-left: auto;
`;

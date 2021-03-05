import React, { useState } from "react";
import styled from "styled-components";
import Button from "../general/Button";
import ResponseTable from "./ResponseTable";

const ManageResponses = () => {
  const [activeMenu, setMenu] = useState("Accept");
  const [newResponse, setNewResponse] = useState(null);
  const [responses, setResponses] = useState({
    Accept: [],
    Maybe: [],
    Decline: [],
  });

  // Begins a new response which is in the category of the activeMenu
  const initializeNewResponse = () => {
    setNewResponse({
      category: activeMenu,
      title: "",
      message: "",
    });
  };

  return (
    <div className="content container margin-t20">
      <TopContent className="flex-row align">
        <h2 className="margin-b20">Mange Responses</h2>
        <Button
          className="button dark-grey-btn"
          label="Add Response"
          onClick={initializeNewResponse}
        />
      </TopContent>
      <ResponseTable
        setMenu={setMenu}
        activeMenu={activeMenu}
        newResponse={newResponse}
        setNewResponse={setNewResponse}
      />
    </div>
  );
};

export default ManageResponses;

const TopContent = styled.div`
  justify-content: space-between;
`;

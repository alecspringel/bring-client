import axios from "axios";
import React, { useEffect, useState } from "react";
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

  // Adds newly created responses to state
  const addNewResponse = (response) => {
    let categoryList = responses[response.category];
    categoryList.unshift(response);
    setResponses({
      ...responses,
      [response.category]: categoryList,
    });
    setNewResponse(null);
  };

  useEffect(() => {
    const endpoint = "/api/responses";
    axios
      .get(process.env.REACT_APP_SERVER_URL + endpoint)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          let categories = { Accept: [], Maybe: [], Decline: [] };
          res.data.forEach((response) => {
            categories[response.category].push(response);
          });
          setResponses(categories);
        }
      })
      .catch((err) => {
        // Handle request error
      });
  }, []);

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
        responses={responses}
        setMenu={setMenu}
        activeMenu={activeMenu}
        newResponse={newResponse}
        setNewResponse={setNewResponse}
        addNewResponse={addNewResponse}
      />
    </div>
  );
};

export default ManageResponses;

const TopContent = styled.div`
  justify-content: space-between;
`;

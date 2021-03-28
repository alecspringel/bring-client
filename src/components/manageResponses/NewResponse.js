import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../general/TextInput";
import TextArea from "../general/TextArea";
import Button from "../general/Button";
import axios from "axios";

const NewResponse = ({ activeMenu, setNewResponse, addNewResponse }) => {
  const [form, setForm] = useState({ title: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitResponse = () => {
    const endpoint = "/api/responses";
    axios
      .post(process.env.REACT_APP_SERVER_URL + endpoint, {
        category: activeMenu,
        title: form.title,
        message: form.message,
      })
      .then((res) => {
        addNewResponse(res.data);
      });
  };

  return (
    <Wrapper>
      <TextInput placeholder="Title" onChange={handleChange} name="title" />
      <TextArea
        placeholder="Response message"
        name="message"
        style={{ marginTop: 10 }}
        onChange={handleChange}
      />
      <div className="flex-row align" style={{ marginLeft: 10 }}>
        New {activeMenu} Response
        <div style={{ marginLeft: "auto", marginTop: 8 }}>
          <Button className="button" onClick={() => setNewResponse(null)}>
            Cancel
          </Button>
          <Button
            className="success-btn button"
            style={{ marginLeft: 7 }}
            onClick={submitResponse}
          >
            Submit
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewResponse;

const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  background: #f1f1f1;
  border-radius: 4px;
`;

import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Response = ({ res, deleteResponse, index }) => {
  return (
    <Wrapper>
      <TitleBar className="flex-row">
        {res.title}{" "}
        <div style={{ marginLeft: "auto" }}>
          <Tooltip title="Delete" style={{ padding: 5 }}>
            <IconButton
              aria-label="delete"
              onClick={() => deleteResponse(index)}
            >
              <DeleteIcon style={{ height: 14, width: 14 }} />
            </IconButton>
          </Tooltip>
        </div>
      </TitleBar>
      <MessageWrapper>{res.message}</MessageWrapper>
    </Wrapper>
  );
};

export default Response;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
  margin: 15px 0;
`;

const TitleBar = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 9px;
  border-radius: 3px 3px 0 0;
  background-color: #f1f1f1;
  min-height: 31px;
`;

const MessageWrapper = styled.div`
  padding: 9px;
`;

import React from "react";
import styled from "styled-components";
import Selector from "../general/Selector";

// Values are passed to mongoDB
const SORT_OPTIONS = [
  {
    label: "Sort Oldest First",
    value: { createdDate: 1 },
  },
  {
    label: "Sort Newest First",
    value: { createdDate: -1 },
  },
];

const FeedOptions = (props) => {
  return (
    <Wrapper>
      <h2 className="text-bold flex-1" style={{ whiteSpace: "nowrap" }}>
        Pending Donations
      </h2>
      <RightOptions>
        <div style={{ width: 200 }}>
          <Selector
            options={SORT_OPTIONS}
            placeholder="Sort Oldest First"
            onChange={props.sort}
          />
        </div>
      </RightOptions>
    </Wrapper>
  );
};

export default FeedOptions;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const RightOptions = styled.div`
  margin-top: 10px;
`;

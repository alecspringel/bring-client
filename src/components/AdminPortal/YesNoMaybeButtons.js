import React, { Component } from "react";
import NoBtn from "../general/NoBtn";
import YesBtn from "../general/YesBtn";
import MaybeBtn from "../general/MaybeBtn";
import styled from "styled-components";

class YesNoMaybeButtons extends Component {
  render() {
    return (
      <Section>
        <ButtonWrapper className="flex-row">
          <NoBtn />
          <MaybeBtn />
          <YesBtn />
        </ButtonWrapper>
      </Section>
    );
  }
}

export default YesNoMaybeButtons;

const Section = styled.section`
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 17px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -1px 5px #00000030;
`;

const ButtonWrapper = styled.div`
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
`;

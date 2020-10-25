import React, { Component } from "react";
import NoBtn from "../general/NoBtn";
import YesBtn from "../general/YesBtn";
import MaybeBtn from "../general/MaybeBtn";
import styled, { css } from "styled-components";

class YesNoMaybeButtons extends Component {
  render() {
    const { setType, animate } = this.props;
    return (
      <Section animate={animate}>
        <ButtonWrapper className="flex-row">
          <NoBtn onClick={() => setType("NO")}/>
          <MaybeBtn onClick={() => setType("MAYBE")}/>
          <YesBtn onClick={() => setType("YES")}/>
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
  transition: all 300ms ease-in;

  ${(props) =>
    props.animate &&
    css`
      transform: translate(0, 200%);
    `}
`;

const ButtonWrapper = styled.div`
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
`;

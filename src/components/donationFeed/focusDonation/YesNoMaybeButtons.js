import React, { Component } from "react";
import NoBtn from "../../general/NoBtn";
import YesBtn from "../../general/YesBtn";
import MaybeBtn from "../../general/MaybeBtn";
import styled, { css } from "styled-components";

class YesNoMaybeButtons extends Component {
  render() {
    const { setType, animate } = this.props;
    return (
      <Section animate={animate}>
        <ButtonWrapper className="flex-row">
          <div className="flex-col">
            <NoBtn onClick={() => setType("NO")} aria-label={"no"} />
            <Label className="margin-t10">Reject</Label>
          </div>
          <div className="flex-col">
            <MaybeBtn onClick={() => setType("MAYBE")} aria-label={"maybe"} />
            <Label className="margin-t10">Maybe</Label>
          </div>
          <div className="flex-col">
            <YesBtn onClick={() => setType("YES")} aria-label={"yes"} />
            <Label className="margin-t10">Accept</Label>
          </div>
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
  justify-content: space-around;
`;

const Label = styled.p`
  margin-top: 5px;
`;

import React, { Component } from "react";
import styled, { css } from "styled-components";
import YesNoMaybeButtons from "../YesNoMaybeButtons";
import SelectResponse from "./SelectResponse";

class ResponseSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //"yes", "no", "maybe"
      responseType: null,
    };
    this.setType = this.setType.bind(this);
  }

  // Sets the type after one of the buttons is clicked
  setType(yesNoMaybe) {
    this.setState({
      responseType: yesNoMaybe,
    });
  }

  render() {
    // Going to include this to make props easy to find/explicit
    const { donation } = this.props;

    return (
      <Section>
        {this.state.responseType && (
          <Animation2 className="flex-col">
            <SelectResponse donation={donation} responseType={this.state.responseType}/>
          </Animation2>
        )}
        <Animation1 animate={this.state.responseType}>
          <h3 className="h3-large">
            {donation.first} {donation.last}
          </h3>
          <ContactInfo className="text-light text-reg">
            {donation.email}
          </ContactInfo>
          <h2>{donation.itemName}</h2>
          <Description className="text-reg margin-t10">
            {donation.description}
          </Description>
        </Animation1>
        <YesNoMaybeButtons
          setType={this.setType}
          animate={this.state.responseType}
        />
      </Section>
    );
  }
}

export default ResponseSection;

const Section = styled.section`
  flex: 0 0 450px;
  position: relative;
`;

const ContactInfo = styled.h4`
  margin-top: 5px;
  margin-bottom: 30px;
`;

const Description = styled.h3`
  line-height: 136%;
`;

const Animation1 = styled.div`
  z-index: 0;
  transition: all 600ms ease-in;
  margin: 30px;

  ${(props) =>
    props.animate &&
    css`
      display: none;
      transform: translate(0, 200%);
    `}
`;

const Animation2 = styled.div`
  margin: 30px;
  align-items: center;
  position: relative;
  height: 100%;

  /* transition: all 600ms ease-in; */
  /* transform: scale(0);

  ${(props) =>
    props.animate &&
    css`
      transform: scale(1);
    `} */
`;
import React, { Component } from "react";
import styled, { css } from "styled-components";
import YesNoMaybeButtons from "./YesNoMaybeButtons";
import SelectResponse from "./SelectResponse";
import GreenCheck from "../../../assets/checkmark-green.svg";

class ResponseSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //"YES", "NO", "MAYBE"
      responseType: null,
    };
    this.setType = this.setType.bind(this);
  }

  // Sets the type after one of the buttons is clicked
  setType(yesNoMaybe) {
    this.props.shrinkImage(true);
    this.setState({
      responseType: yesNoMaybe,
    });
  }

  render() {
    // Going to include this to make props easy to find/explicit
    const { donation, nextSubmission } = this.props;

    return (
      <Section>
        {this.state.responseType && (
          <Animation2 className="flex-col">
            <SelectResponse
              donation={donation}
              responseType={this.state.responseType}
              nextSubmission={nextSubmission}
              setType={this.setType}
              shrinkImage={this.props.shrinkImage}
            />
          </Animation2>
        )}
        <Animation1 animate={this.state.responseType}>
          <MarginWrapper>
            <h3 className="h3-large">
              {donation.first} {donation.last}
            </h3>
            <ContactInfo className="text-light text-reg">
              <div style={{ marginBottom: 5 }}>
                <a
                  className="text-light text-reg"
                  href={"mailto:" + donation.email}
                >
                  {donation.email}{" "}
                  {donation.preferEmail && <PreferredCheck src={GreenCheck} />}
                </a>
              </div>
              <div>
                <a
                  className="text-light text-reg"
                  href={"tel:" + donation.phone}
                >
                  {donation.phone}{" "}
                  {donation.preferPhone && <PreferredCheck src={GreenCheck} />}
                </a>
              </div>
            </ContactInfo>
            <h2>{donation.itemName}</h2>
            <Description className="text-reg margin-t10">
              {donation.description}
            </Description>
          </MarginWrapper>
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
  @media (max-width: 850px) {
    height: 50%;
    flex: 1;
  }
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
  height: calc(100% - 120px);
  width: 100%;
  position: absolute;
  overflow: auto;
  ${(props) =>
    props.animate &&
    css`
      display: none;
      transform: translate(0, 200%);
    `}
`;

const MarginWrapper = styled.div`
  margin: 30px;
  word-break: break-word;
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

const PreferredCheck = styled.img`
  vertical-align: middle;
  margin-left: 5px;
  height: 15px;
`;

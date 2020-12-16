import React, { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../../general/ImageGallery";
import ResponseSection from "./ResponseSection";

class SubmissionFocus extends Component {
  render() {
    return (
      <Background onClick={this.props.close}>
        <Content className="container" onClick={(e) => e.stopPropagation()}>
          <ImageContainer>
            <ImageGallery images={this.props.donation.imageUrls} />
          </ImageContainer>
          <ResponseSection
            donation={this.props.donation}
            nextSubmission={this.props.nextSubmission}
          />
        </Content>
      </Background>
    );
  }
}

export default SubmissionFocus;

const Background = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(99, 114, 130, 0.5);
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  background-color: #fefefe;
  border-radius: 3px;
  box-shadow: 3px 3px 9px #48484830;
  width: 100%;
  padding: 0;
  display: flex;
  overflow: hidden;
  height: 620px;
  @media (max-height: 690px) {
    height: 520px;
  }
`;

const ImageContainer = styled.div`
  z-index: 1;
  flex: 1;
  box-shadow: 3px 0px 7px #0000002e;
`;

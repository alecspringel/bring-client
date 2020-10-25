import React, { Component } from "react";
import styled from "styled-components";
import ResponseSection from "./ResponseSection";

class SubmissionFocus extends Component {
  render() {
    return (
      <Background onClick={this.props.close}>
        {this.props.close && (
          <Exit className="text-white" onClick={this.props.close}>
            &times;
          </Exit>
        )}
        <Content className="container" onClick={(e) => e.stopPropagation()}>
          <ImageContainer>
            <Image src={this.props.donation.imageUrls[0]} />
          </ImageContainer>
          <ResponseSection donation={this.props.donation}/>
        </Content>
      </Background>
    );
  }
}

export default SubmissionFocus;

const Exit = styled.span`
  cursor: pointer;
  font-size: 60px;
  position: absolute;
  right: 56px;
  top: 26px;
`;

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
`;

const ImageContainer = styled.div`
  flex: 1;
  box-shadow: 3px 0px 7px #0000002e;
`;

const Image = styled.img`
  border-radius: 3px 0 0 3px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

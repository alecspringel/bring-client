import React, { Component } from "react";
import styled from "styled-components";
import Button from "../general/Button.js"


class SuccessMessage extends Component {
  render() {
    return (
      <Background onClick={this.props.close}>
        {this.props.close && (
          <Exit className="text-white" onClick={this.props.close}>
            &times;
          </Exit>
        )}
        <Content className="container" onClick={(e) => e.stopPropagation()}>
          <div style={{ margin: "0 auto" }}>
            <h2 style={{ textAlign: "center"}}>Submitted!</h2>
            <p className="margin-tb10">
            Thank you!  We'll get back to you soon.
            </p>
            <Button className="button green-btn" label="SUBMIT ANOTHER ITEM" width="100%" onClick={this.props.close}/>
          </div>
        </Content>
      </Background>
    );
  }
}

export default SuccessMessage;

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
  width: 25%;
  padding: 15px;
  display: flex;
  overflow: hidden;
`;

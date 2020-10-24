import React, { Component } from "react";
import styled from "styled-components";
import TextInput from "../general/TextInput";
import TextArea from "../general/TextArea";
import ImgIcon from "../../assets/img-icon.svg";
import Button from "../general/Button";

class PhotoUpload extends Component {
  render() {
    return (
      <>
        <Background>
          <InvisibleFile
            type="file"
            name="files"
            multiple
            onChange={this.props.handleFiles}
          />
          <div className="text-center">
            <Icon src={ImgIcon} />
            <h3 style={{ color: "#000", marginBottom: 5 }}>Upload Images</h3>
            <p>Select up to 5 images for us to review</p>
            <Button
              className="button margin-t10"
              style={{ background: "#fff", padding: 7 }}
              label="Choose Files"
            />
          </div>
        </Background>
        <TextInput
          name="item"
          value={this.props.item}
          onChange={this.props.handleChange}
          className="margin-t20"
          placeholder="Item Names"
          style={{ marginBottom: 15 }}
        />
        <TextArea
          name="description"
          value={this.props.description}
          onChange={this.props.handleChange}
          placeholder="Description (optional)"
          type="text"
          rows="3"
          style={{ marginBottom: 15 }}
        />
      </>
    );
  }
}

export default PhotoUpload;

const Background = styled.div`
  position: relative;
  background: #ebebeb;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  height: 80px;
`;

const InvisibleFile = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

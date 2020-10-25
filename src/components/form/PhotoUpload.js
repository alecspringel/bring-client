import React, { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../general/ImageGallery";
import TextInput from "../general/TextInput";
import TextArea from "../general/TextArea";
import ImgIcon from "../../assets/img-icon.svg";
import Button from "../general/Button";

class PhotoUpload extends Component {
  render() {
    const {
      files,
      handleFiles,
      handleChange,
      itemName,
      description,
    } = this.props;

    // Displayed in gallery
    var images = [];

    if (files) {
      Array.from(files).forEach((file) => {
        const url = URL.createObjectURL(file);
        images.push(url);
      });
    }

    return (
      <>
        <Background>
          <InvisibleFile
            type="file"
            name="files"
            multiple
            onChange={handleFiles}
          />
          {images.length === 0 ? (
            <div className="text-center">
              <Icon src={ImgIcon} />
              <h3 style={{ color: "#000", marginBottom: 5 }}>Upload Images</h3>
              <p>Select up to 5 images for us to review</p>
              <UploadBtn
                className="button margin-t20"
              >
                Choose Files
              </UploadBtn>
            </div>
          ) : (
            <PhotoWrapper className="text-center">
              <ImageGallery images={images} />
            </PhotoWrapper>
          )}
        </Background>
        <TextInput
          name="itemName"
          value={itemName}
          onChange={handleChange}
          className="margin-t20"
          placeholder="Item Name"
          style={{ marginBottom: 15 }}
          required
        />
        <TextArea
          name="description"
          value={description}
          onChange={handleChange}
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

const PhotoWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const UploadBtn = styled.div`
  box-shadow: 0px 0px 2px #00000054;
  background: #fff;
  padding: 7px;
`;

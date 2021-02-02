import React, { useEffect } from "react";
import styled from "styled-components";
import ImageGallery from "../general/ImageGallery";
import TextInput from "../general/TextInput";
import TextArea from "../general/TextArea";
import ImgIcon from "../../assets/img-icon.svg";

const PhotoUpload = ({
  files,
  fileUrls,
  handleFiles,
  handleChange,
  itemName,
  description,
  errors,
  removeFiles,
}) => {
  return (
    <>
      <Background>
        <InvisibleFile
          type="file"
          name="files"
          multiple
          onChange={handleFiles}
        />
        {fileUrls && fileUrls.length === 0 ? (
          <div className="text-center">
            <Icon src={ImgIcon} />
            <h3 style={{ color: "#000", marginBottom: 5 }}>Upload Images</h3>
            <p>Select up to 5 images for us to review</p>
            <UploadBtn className="button margin-t20">Choose Files</UploadBtn>
          </div>
        ) : (
          <PhotoWrapper className="text-center">
            <ImageGallery images={fileUrls} />
            <ChangeUpload className="margin-t20" onClick={removeFiles}>
              Remove files
            </ChangeUpload>
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
        aria-label="item name"
        error={errors.itemName}
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
        aria-label="description"
      />
    </>
  );
};

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
  top: 0;
  left: 0;
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

const ChangeUpload = styled.div`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0px 0px 5px #00000054;
  background: #fff;
  padding: 7px 21px;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageGallery from "../../general/ImageGallery";
import ResponseSection from "./ResponseSection";
import useWindowDimensions from "../../general/WindowDimensions";

const SubmissionFocus = ({ close, donation, nextSubmission, responses }) => {
  const { height } = useWindowDimensions();
  const [imageIsShrunk, shrinkImage] = useState(false);
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Background onClick={close}>
      <Content
        className="container"
        onClick={(e) => e.stopPropagation()}
        windowHeight={height}
      >
        <ImageContainer imageIsShrunk={imageIsShrunk}>
          <BackDiv onClick={close}>
            <BackArrow src={require("../../../assets/exit-white.png")} />
            Back to menu
          </BackDiv>
          <ImageGallery images={donation.imageUrls} />
        </ImageContainer>
        <ResponseSection
          donation={donation}
          nextSubmission={nextSubmission}
          shrinkImage={shrinkImage}
          responses={responses}
        />
      </Content>
    </Background>
  );
};

export default SubmissionFocus;

const BackDiv = styled.div`
  cursor: pointer;
  position: absolute;
  left: 14px;
  top: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  color: white;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const BackArrow = styled.img`
  height: 30px;
  margin-right: 7px;
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
  height: 620px;
  @media (max-height: 690px) {
    height: 520px;
  }
  @media (max-height: 550px) {
    height: 420px;
  }
  @media (max-width: 850px) {
    height: ${(props) => props.windowHeight + "px"};
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  z-index: 1;
  flex: 1;
  box-shadow: 3px 0px 7px #0000002e;
  position: relative;
  transition: height 150ms ease-out;
  @media (max-width: 850px) {
    flex: none;
    height: ${(props) => (props.imageIsShrunk ? "25%" : "50%")};
  }
`;

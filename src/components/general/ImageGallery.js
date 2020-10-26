import React, { Component } from "react";
import styled from "styled-components";
import LeftArrowImg from "../../assets/arrow-left.svg";
import RightArrowImg from "../../assets/arrow-right.svg";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    var primary = null;
    if (props.images.length > 0) {
      primary = props.images[0];
    }
    this.state = {
      images: props.images,
      primary,
      current: 0,
      enlarge: false,
    };
    this.nextImage = this.nextImage.bind(this);
    this.toggleEnlarge = this.toggleEnlarge.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.images !== state.images) {
      return {
        images: props.images,
        current: 0,
      };
    }
    return null;
  }

  nextImage(e, increment) {
    e.stopPropagation();
    if (this.state.images.length !== 0) {
      var current = this.state.current + increment;
      if (current === this.state.images.length) {
        this.setState({ current: 0 });
      } else if (current === -1) {
        this.setState({ current: this.state.images.length - 1 });
      } else {
        this.setState({ current });
      }
    }
  }

  toggleEnlarge() {
    this.setState({
      enlarge: !this.state.enlarge,
    });
  }

  render() {
    return (
      <Wrapper>
        {!this.state.enlarge && (
          <Primary
            src={this.state.images[this.state.current]}
            onClick={this.toggleEnlarge}
          />
        )}
        <EnlargeBackground
          src={this.state.images[this.state.current]}
        ></EnlargeBackground>
        <Overlay onClick={this.toggleEnlarge}>
          <div style={{ width: "100%", zIndex: 1 }}>
            <LeftArrow
              src={LeftArrowImg}
              onClick={(e) => this.nextImage(e, -1)}
              show={this.state.current !== 0}
            />
            <RightArrow
              src={RightArrowImg}
              onClick={(e) => this.nextImage(e, 1)}
              show={
                this.state.current !== this.state.images.length - 1 &&
                this.state.images.length > 1
              }
            />
          </div>
          {this.state.enlarge && (
            <EnlargeWrapper>
              <EnlargeBackground
                src={this.state.images[this.state.current]}
              ></EnlargeBackground>
              <LargeImg src={this.state.images[this.state.current]} />
              <div style={{ width: "100%", position: "absolute" }}>
                <LargeLeftArrow
                  src={LeftArrowImg}
                  onClick={(e) => this.nextImage(e, -1)}
                  show={this.state.current !== 0}
                />
                <LargeRightArrow
                  src={RightArrowImg}
                  onClick={(e) => this.nextImage(e, 1)}
                  show={
                    this.state.current !== this.state.images.length - 1 &&
                    this.state.images.length > 1
                  }
                />
              </div>
            </EnlargeWrapper>
          )}
        </Overlay>
      </Wrapper>
    );
  }
}

export default ImageGallery;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
`;

const Primary = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  z-index: 1;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
`;

const NextArrow = styled.img`
  cursor: pointer;
  height: 30px;
  opacity: 0.5;
  transition: opacity 150ms;
  &:hover {
    opacity: 0.6;
  }
  display: ${(props) => (props.show ? "block" : "none")};
`;

const LeftArrow = styled(NextArrow)`
  float: left;
  margin-left: 20px;
`;

const RightArrow = styled(NextArrow)`
  float: right;
  margin-right: 40px;
`;

const LargeLeftArrow = styled(NextArrow)`
  float: left;
  margin-left: 40px;
`;

const LargeRightArrow = styled(NextArrow)`
  float: right;
  margin-right: 40px;
`;

const EnlargeWrapper = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: -webkit-zoom-out;
  cursor: zoom-out;
`;

const EnlargeBackground = styled.img`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0 0 0 / 75%);
  filter: blur(60px);
  -webkit-filter: blur(60px);
  transform: scale(2);
`;

const LargeImg = styled.img`
  max-height: 70vh;
  max-width: 70vw;
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: blur(0);
  -webkit-filter: blur(0);
`;

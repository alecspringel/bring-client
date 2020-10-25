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
      primary,
      current: 0,
    };
    this.nextImage = this.nextImage.bind(this);
  }

  nextImage(increment) {
    if (this.props.images.length !== 0) {
      var current = this.state.current + increment;
      if (current === this.props.images.length) {
        this.setState({ current: 0 });
      } else if (current === -1) {
        this.setState({ current: this.props.images.length - 1 });
      } else {
        this.setState({ current });
      }
    }
  }

  render() {
    const { images } = this.props;
    return (
      <Wrapper>
        <Primary src={images[this.state.current]} />
        <Overlay>
          <div style={{ width: "100%" }}>
            <LeftArrow
              src={LeftArrowImg}
              onClick={() => this.nextImage(-1)}
              show={this.state.current !== 0}
            />
            <RightArrow
              src={RightArrowImg}
              onClick={() => this.nextImage(1)}
              show={
                this.state.current !== this.props.images.length - 1 &&
                this.props.images.length > 1
              }
            />
          </div>
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
`;

const Primary = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const NextArrow = styled.img`
  cursor: pointer;
  height: 30px;
  opacity: 0.5;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const LeftArrow = styled(NextArrow)`
  float: left;
  margin-left: 20px;
`;

const RightArrow = styled(NextArrow)`
  float: right;
  margin-right: 20px;
`;

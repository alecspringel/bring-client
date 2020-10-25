import React, { Component } from "react";
import styled from "styled-components";

function shortMonth (date) {
  const month = date.getMonth();
  var names = [];
  names[0] = "Jan";
  names[1] = "Feb";
  names[2] = "Mar";
  names[3] = "Apr";
  names[4] = "May";
  names[5] = "Jun";
  names[6] = "Jul";
  names[7] = "Aug";
  names[8] = "Sep";
  names[9] = "Oct";
  names[10] = "Nov";
  names[11] = "Dec";
  return names[month];
};

class SubmissionTile extends Component {
  render() {
    const createdDate = new Date(this.props.donation.createdDate);
    return (
      <Tile className="flex-row" onClick={() => this.props.focusTile(this.props.donation, this.props.index)}>
        <DateCorner className="text-reg">
          {shortMonth(createdDate) + " " + createdDate.getDate()}
        </DateCorner>
        <ImgBackground>
          <Img src={this.props.donation.imageUrls[0]} />
        </ImgBackground>
        <DescriptionDiv>
          <h2>{this.props.donation.itemName}</h2>
          <FromLabel className="text-light">
            from {this.props.donation.first} {this.props.donation.last}
          </FromLabel>
          <Description className="margin-t10 text-reg">
            {this.props.donation.description}
          </Description>
        </DescriptionDiv>
      </Tile>
    );
  }
}

export default SubmissionTile;

const Tile = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #0000004a;
  margin: 20px 0;
  border-radius: 3px;
  height: 150px;
`;

const ImgBackground = styled.div`
  height: 150px;
  width: 150px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 3px 0 0 3px;
  object-fit: cover;
`;

const DescriptionDiv = styled.div`
  margin: 10px 40px;
`;

const FromLabel = styled.h3`
  margin-top: 5px;
`;

const DateCorner = styled.h3`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Description = styled.h4`
  max-height: 58px;
  overflow: hidden;
`;

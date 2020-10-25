import React, { Component } from 'react';
import styled from 'styled-components';
import YesNoMaybeButtons from '../YesNoMaybeButtons';

class ResponseSection extends Component {
  render() {
    return (
      <Section>
        <h3 className="h3-large">{this.props.donation.first} {this.props.donation.last}</h3>
        <ContactInfo className="text-light text-reg">{this.props.donation.email}</ContactInfo>
        <h2>{this.props.donation.itemName}</h2>
        <Description className="text-reg margin-t10">{this.props.donation.description}</Description>
        <YesNoMaybeButtons/>
      </Section>
    );
  }
}

export default ResponseSection;

const Section = styled.section`
  flex: 0 0 450px;
  padding: 30px;
  position: relative;
`;

const ContactInfo = styled.h4`
  margin-top: 5px;
  margin-bottom: 30px;
`

const Description = styled.h3`
  line-height: 136%;
`
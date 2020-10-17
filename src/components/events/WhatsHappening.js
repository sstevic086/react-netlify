import React, { Component } from "react";
import styled from "styled-components";

import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";

const ImageContainer = styled.div`
  padding: 1rem 0;
`;
const ImageTile = styled.img`
  height: auto;
  width: 100%;
  align-items: center;
  border-radius: 5px;
`;

const HeroHeader = styled.div`
  color: #687379;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const HeroUnderlineText = styled.div`
  font-family: FSAlbert-Bold;
  font-weight: 600;
  align-items: center;
  text-align: center;
  width: fit-content;
  padding: 0 1rem 1.25rem;
  position: relative;
  @media (max-width: 900px) {
    padding: 0 0.5rem 0.5rem;
    max-width: 100%;
    font-size: 24px;
    text-align: left;
  }
`;

const HeroContentMiddle = styled.div`
  color: #687379;
  font-size: 20px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 0.5rem 0;
  text-align: center;
`;

const HeroContentLeft = styled.div`
  color: #687379;
  font-size: 20px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 0.5rem 0;
  text-align: left;
`;

class WhatsHappening extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          padding: "2rem 0"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem 0"
          }}
        >
          <HeroUnderlineText>
            <HeroHeader>{this.props.Header}</HeroHeader>
            <img
              src={require("images/SVG/ribbon-herobanner1.svg")}
              style={{
                position: "absolute",
                left: 0,
                bottom: 5,
                width: "100%"
              }}
            />
          </HeroUnderlineText>
        </div>
        <HeroContentMiddle>{this.props.SubHeader}</HeroContentMiddle>
        <ImageContainer>
          <ImageTile src={this.props.Image} />
        </ImageContainer>
        <HeroContentLeft>{this.props.Content}</HeroContentLeft>
      </div>
    );
  }
}
export default withRouter(WhatsHappening);

import React, { Component } from "react";
import styled from "styled-components";

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
  padding: 1rem 0;
  line-height: 90%;
  text-align: left;
`;

const HeroContent = styled.div`
  color: #687379;
  font-size: 18px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 0.5rem 0;
`;
class MainHero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ImageContainer>
          <ImageTile
            src={this.props.HeroTile}
            alt={this.props.alt}
            title={this.props.alt}
          />
        </ImageContainer>
        <HeroContent>{this.props.Content}</HeroContent>
        <HeroHeader>{this.props.Header}</HeroHeader>
        <HeroContent>{this.props.Desc}</HeroContent>
      </div>
    );
  }
}
export default MainHero;

import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 150px;
  margin: 25px 0 40px;
`;
const TitleContainer = styled.div`
  font-family: FSAlbert-Bold;
  display: inline;
  font-size: 50px;
  font-weight: 700;
  color: #687379;
  padding: 2rem 0.5rem;
  @media (max-width: 900px) {
    font-size: 46px;
  }
`;
const TitleUnderline = styled.div`
  font-family: FSAlbert-Bold;
  display: inline;
  background-repeat: no-repeat;
  background-position: bottom;
  @media (max-width: 900px) {
    padding: 0;
  }
  position: relative;
`;

const SubTitleContainer = styled.div`
  font-family: FSAlbert-Regular;
  font-size: 22px;
  font-weight: 500;
  color: #687379;
  margin: 0 3rem 0;
  @media (max-width: 900px) {
    font-size: 20px;
    margin: 0 1.25rem 0;
  }
`;

class HeadTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }
  render() {
    return (
      <MainContainer>
        <TitleContainer>
          {this.props.title}
          <TitleUnderline>
            {this.props.titleU && (
              <span>
                {this.props.titleU}
                <div className="ribbon ribbonBig ribbonFlex ribbonFeature" />
              </span>
            )}
          </TitleUnderline>
          {this.props.title2}
        </TitleContainer>
        <SubTitleContainer>{this.props.subtitle}</SubTitleContainer>
      </MainContainer>
    );
  }
}

export default HeadTextComponent;

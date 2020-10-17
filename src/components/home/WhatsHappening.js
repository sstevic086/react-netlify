import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import HeadTextComponent from "components/common/HeadTextComponent";

import { injectIntl } from "react-intl";

const Parent = styled.div`
  position: relative;
  scrollbar-width: none;
`;

const ExploreRowParent = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  scrollbar-width: none;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 150px;
  padding: 0 55px 0;
  scrollbar-width: none;
  @media (max-width: 900px) {
    padding: 0 10px 0;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ElementContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 50%;
  min-width: 50%;
  width: 50% !important;
  @media (max-width: 900px) {
    padding: unset;
    width: 100% !important;
    max-width: unset;
    min-width: unset;
  }
`;

const ImageContainer = styled.div`
  padding-bottom: 60%;
  width: 100%;
  border-radius: 8px;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

const SubTitleContainer = styled.div`
  font-family: FSAlbert-Regular;
  text-align: left;
  font-size: 20px;
  color: #687379;

  padding: 40px 0 80px;
  @media (max-width: 900px) {
    padding: 20px 0 40px;
  }
`;

const LeftButtonContainer = styled.div`
  position: absolute;

  display: flex;
  left: 0px;
  top: 0;
  height: 50%;
  align-items: center;
  @media (max-width: 900) {
    display: none;
  }
`;
const RightButtonContainer = styled.div`
  position: absolute;
  width: 47px;
  display: flex;
  right: 0px;
  top: 0;
  height: 50%;
  align-items: center;
  @media (max-width: 900) {
    display: none;
  }
`;
const ScrollButton = styled.div`
  margin: 5px;
  width: 40px;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  border-radius: 50%;
  /* border: 1px solid #000; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;

class WhatsHappening extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <HeadTextComponent
          title={this.props.intl.formatMessage({
            id: "landing.whatshappening.title"
          })}
          subtitle={this.props.intl.formatMessage({
            id: "landing.whatshappening.subtitle"
          })}
        />
        <ExploreRowParent>
          <RowContainer id="events">
            {this.props.whatsHappeningContents.map(element => {
              return (
                <ElementContainer>
                  <div
                    style={{
                      padding: "1rem"
                    }}
                  >
                    <ImageContainer
                      style={{
                        background: `url(${element.imgSrc}) center center / cover`
                      }}
                      alt={element.alt}
                      title={element.alt}
                    ></ImageContainer>
                    <SubTitleContainer>
                      {element.subtitle}
                      <div
                        style={{
                          color: "#ED1B2E",
                          cursor: "pointer",
                          marginTop: 10
                        }}
                        onClick={() =>
                          this.props.history.push(element.redirectTo)
                        }
                      >
                        {this.props.intl.formatMessage({
                          id: "landing.whatshappening.findmore"
                        })}
                      </div>
                    </SubTitleContainer>
                  </div>
                </ElementContainer>
              );
            })}
          </RowContainer>
        </ExploreRowParent>
      </MainContainer>
    );
  }
}

export default withRouter(injectIntl(WhatsHappening));

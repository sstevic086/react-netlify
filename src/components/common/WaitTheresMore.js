import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { injectIntl } from "react-intl";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  padding: 2rem 0.5rem;
`;
const TitleContainer = styled.div`
  font-family: FSAlbert-Bold;
  font-size: 65px;
  font-weight: 700;
  text-align: center;
  color: #687379;
  padding: 2rem 0.5rem;
  width: 100%;
  @media (max-width: 900px) {
    font-size: 50px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  background-color: #fff;
  min-height: 125px;
  max-width: 100%;
  overflow-x: auto;

  @media (min-width: 901px) {
    justify-content: center;
  }
  @media (max-width: 900px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
`;

const InnerCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 1rem;
  height: 100%;

  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 5px;
`;

const CardContent = styled.div`
  font-family: FSAlbert-Bold;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  min-height: 150px;
  flex: 1;

  margin: 0.5rem;
  @media (max-width: 900px) {
    font-size: 22px;
    margin: 0;
    padding: 0.5rem;

    min-height: 121.25px;
    min-width: 325px;
  }
  padding: 0.5rem;
`;

const TextNArrow = styled.div`
  display: inline;
  max-width: 70%;
`;

const ArrowDiv = styled.div`
  display: inline;
  padding-right: 1rem;
`;

class HeadTextComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <TitleContainer>
          {this.props.intl.formatMessage({
            id: "common.waittheresmore.title"
          })}
        </TitleContainer>
        <CardsContainer>
          {this.props.cards.map(cards => {
            return (
              <CardContent
                onClick={() => this.props.history.push(cards.redirectTo)}
              >
                <InnerCardContainer
                  style={{ backgroundImage: `url(${cards.imgUrl})` }}
                >
                  <TextNArrow>{cards.content}</TextNArrow>
                  <ArrowDiv>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </ArrowDiv>
                </InnerCardContainer>
              </CardContent>
            );
          })}
        </CardsContainer>
      </MainContainer>
    );
  }
}

export default withRouter(injectIntl(HeadTextComponent));

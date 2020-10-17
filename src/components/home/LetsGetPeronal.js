import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import MediaQuery from "react-responsive";

import HeadTextComponent from "components/common/HeadTextComponent";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

import { injectIntl } from "react-intl";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 150px;
  padding: 0 55px 50px;
  @media (max-width: 900px) {
    padding: 0 10px 50px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
`;

const BoldTextContainer = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  font-weight: 800;
  text-align: center;
  color: #687379;
  height: 50px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  &:before,
  &:after {
    content: "";
    display: block;
  }

  align-items: baseline;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  max-width: 350px;
  @media (max-width: 900px) {
    padding: unset;
    width: 100%;
  }
`;

const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
  padding-bottom: 37px;
  border-radius: 8px;
  @media (max-width: 900px) {
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
  }
`;

const SubTitleContainer = styled.div`
  text-align: center;
  font-size: 17px;
  color: #687379;
  font-weight: regular;
  line-height: 24px;
  height: 100px;
  @media (max-width: 900px) {
    width: 83%;
  }
`;

const LearnMoreButton = styled.div`
  cursor: pointer;
  margin-top: 20px;

  width: 127px;
  display: inline-block;
  height: 46px;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ed1b2e;
  color: #ffffff;
  border-radius: 50px;
  text-align: center;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 900px) {
    margin-bottom: 40px;
  }
`;

const HeroContents = [
  {
    index: 0,
    title: "landing.letsgetpersonal.1.title",
    subText: "landing.letsgetpersonal.1.subText",
    imgSrc: require("images/assets/img-feature-1-3x.png"),
    alt: "alt.1.getpersonal",
    redirectTo: `/personal-health-assistant`
  },
  {
    index: 1,
    title: "landing.letsgetpersonal.2.title",
    subText: "landing.letsgetpersonal.2.subText",
    imgSrc: require("images/assets/img-feature-2-3x.png"),
    alt: "alt.2.getpersonal",
    redirectTo: `/challenge-yourself`
  },
  {
    index: 2,
    title: "landing.letsgetpersonal.3.title",
    subText: "landing.letsgetpersonal.3.subText",
    imgSrc: require("images/assets/img-feature-3-3x.png"),
    redirectTo: `/alerts-and-notifications`,
    alt: "alt.3.getpersonal"
  }
];

class LetsGetPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, language: "" };
    this.onchange = this.onchange.bind(this);
  }
  componentDidMount() {
    if (this.props.intl.locale === "en") this.setState({ language: "en" });
    else this.setState({ language: "my" });
  }
  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div id="letsgetpersonal">
        <MainContainer>
          <HeadTextComponent
            title={this.props.intl.formatMessage({
              id: "landing.letsgetpersonal.hero"
            })}
            subtitle={this.props.intl.formatMessage({
              id: "landing.letsgetpersonal.tagline"
            })}
          />
          <MediaQuery minWidth={900}>
            <RowContainer>
              {HeroContents.map(element => {
                return (
                  <ElementContainer>
                    <ImageContainer
                      src={element.imgSrc}
                      alt={this.props.intl.formatMessage({
                        id: element.alt
                      })}
                      title={this.props.intl.formatMessage({
                        id: element.alt
                      })}
                    />
                    <BoldTextContainer>
                      {element.title &&
                        this.props.intl.formatMessage({
                          id: element.title
                        })}
                    </BoldTextContainer>
                    <SubTitleContainer>
                      {element.subText &&
                        this.props.intl.formatMessage({
                          id: element.subText
                        })}
                    </SubTitleContainer>
                    <LearnMoreButton
                      onClick={() =>
                        this.props.history.push(element.redirectTo)
                      }
                    >
                      <div>
                        {this.props.intl.formatMessage({
                          id: "landing.letsgetpersonal.learn-more"
                        })}
                      </div>
                    </LearnMoreButton>
                  </ElementContainer>
                );
              })}
            </RowContainer>
          </MediaQuery>
          <MediaQuery maxWidth={900}>
            <CarouselContainer>
              <Carousel
                infinite
                animationSpeed={750}
                onChange={this.onchange}
                value={this.state.value}
                centered
                keepDirectionWhenDragging={true}
                draggable={true}
              >
                {HeroContents.map(element => {
                  return (
                    <RowContainer>
                      <ElementContainer>
                        <ImageContainer
                          src={element.imgSrc}
                          alt={this.props.intl.formatMessage({
                            id: element.alt
                          })}
                          title={this.props.intl.formatMessage({
                            id: element.alt
                          })}
                        />
                        <BoldTextContainer
                          style={{
                            height:
                              this.state.language === "my" ? "60px" : "50px"
                          }}
                        >
                          {element.title &&
                            this.props.intl.formatMessage({
                              id: element.title
                            })}
                        </BoldTextContainer>
                        <SubTitleContainer
                          style={{
                            height:
                              this.state.language === "my" ? "100px" : "80px"
                          }}
                        >
                          {element.subText &&
                            this.props.intl.formatMessage({
                              id: element.subText
                            })}
                        </SubTitleContainer>
                        <div
                          style={{
                            padding: "1.5rem 0"
                          }}
                        >
                          <LearnMoreButton
                            onClick={() =>
                              this.props.history.push(element.redirectTo)
                            }
                          >
                            <div>
                              {this.props.intl.formatMessage({
                                id: "landing.letsgetpersonal.learn-more"
                              })}
                            </div>
                          </LearnMoreButton>
                        </div>
                      </ElementContainer>
                    </RowContainer>
                  );
                })}
              </Carousel>
              <Dots
                value={this.state.value}
                onChange={this.onchange}
                number={HeroContents.length}
              />
            </CarouselContainer>
            {/* <CarouselProvider
              lockOnWindowScroll={true}
              naturalSlideWidth={50}
              naturalSlideHeight={60}
              totalSlides={3}
              isPlaying={true}
              interval={4000}
              playDirection="forward"
            >
              <Slider>
                {HeroContents.map(element => {
                  return (
                    <Slide
                      index={element.index}
                      style={{
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <div>
                        <ImageContainer src={element.imgSrc} />
                        <BoldTextContainer>
                          {element.title &&
                            this.props.intl.formatMessage({
                              id: element.title
                            })}
                        </BoldTextContainer>
                        <SubTitleContainer
                          style={{
                            width: "100%"
                          }}
                        >
                          {element.subText &&
                            this.props.intl.formatMessage({
                              id: element.subText
                            })}
                        </SubTitleContainer>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center"
                          }}
                        >
                          <LearnMoreButton
                            onClick={() =>
                              this.props.history.push(element.redirectTo)
                            }
                          >
                            <div>
                              {this.props.intl.formatMessage({
                                id: "landing.letsgetpersonal.learn-more"
                              })}
                            </div>
                          </LearnMoreButton>
                        </div>
                      </div>
                    </Slide>
                  );
                })}
              </Slider>
            </CarouselProvider> */}
          </MediaQuery>
        </MainContainer>
      </div>
    );
  }
}

export default withRouter(injectIntl(LetsGetPersonal));

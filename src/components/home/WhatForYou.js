import React, { Component } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { injectIntl } from "react-intl";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 400px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CarouselContainer = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const HeroImageContainer = styled.img`
  width: 100%;
  align: center;
  @media (max-width: 900px) {
    align: left;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding-left: 61px;
  @media (max-width: 900px) {
    width: unset;
    padding: 3rem 1rem 0;
  }
`;

const MottoContainer = styled.div`
  font-family: FSAlbert-Bold;
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

const ContentContainer = styled.div`
  font-family: FSAlbert-Regular;
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  padding-top: 22px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

class LeftTextHeroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
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
    const imageRefs =
      this.props.intl.locale === "en"
        ? {
            desktop: [
              {
                img: require("images/assets/img-bg-benefit-1.png"),
                alt: "Your One-Stop Health Solution App - Pulse By Prudential"
              },
              {
                img: require("images/assets/img-bg-benefit-2.png"),
                alt:
                  "Healthcare App Powered By Ai Technology - Pulse By Prudential"
              },
              {
                img: require("images/assets/img-bg-benefit-3.png"),
                alt:
                  "Pulse Healthcare App  Provides With Relevant Health Insights "
              },
              {
                img: require("images/assets/img-bg-benefit-4.png"),
                alt:
                  "Pulse App Is Available To Both Prudential and Non-Prudential Customers"
              }
            ],
            mobile: [
              {
                img: require("images/assets/img-bg-benefits-1-2x.png"),
                alt: "Your One-Stop Health Solution App - Pulse By Prudential"
              },
              {
                img: require("images/assets/img-bg-benefits-2-2x.png"),
                alt:
                  "Healthcare App Powered By Ai Technology - Pulse By Prudential"
              },
              {
                img: require("images/assets/img-bg-benefits-3-2x.png"),
                alt:
                  "Pulse Healthcare App  Provides With Relevant Health Insights "
              },
              {
                img: require("images/assets/img-bg-benefits-4-2x.png"),
                alt:
                  "Pulse App Is Available To Both Prudential and Non-Prudential Customers"
              }
            ]
          }
        : {
            desktop: [
              {
                img: require("images/assets/img-bg-benefits-1-bm.png"),
                alt:
                  "Kemanfaatan Pulse: Semua dalam satu tempat untuk kesihatan"
              },
              {
                img: require("images/assets/img-bg-benefits-2-bm.png"),
                alt:
                  "Kemanfaatan Pulse: Aplikasi produk kesihatan dikuasakan oleh teknologi AI"
              },
              {
                img: require("images/assets/img-bg-benefits-3-bm.png"),
                alt:
                  "Kemanfaatan Pulse: Memberi maklumat kesihatan relevan kepada anda "
              },
              {
                img: require("images/assets/img-bg-benefits-4-bm.png"),
                alt:
                  "Kemanfaatan Pulse: Tersedia untuk pelanggan Prudential dan bukan Prudential"
              }
            ],
            mobile: [
              {
                img: require("images/assets/img-bg-benefits-1-bm-2x.png"),
                alt:
                  "Kemanfaatan Pulse: Semua dalam satu tempat untuk kesihatan"
              },
              {
                img: require("images/assets/img-bg-benefits-2-bm-2x.png"),
                alt:
                  "Kemanfaatan Pulse: Aplikasi produk kesihatan dikuasakan oleh teknologi AI"
              },
              {
                img: require("images/assets/img-bg-benefits-3-bm-2x.png"),
                alt:
                  "Kemanfaatan Pulse: Memberi maklumat kesihatan relevan kepada anda"
              },
              {
                img: require("images/assets/img-bg-benefits-4-bm-2x.png"),
                alt:
                  "Kemanfaatan Pulse: Tersedia untuk pelanggan Prudential dan bukan Prudential"
              }
            ]
          };
    return (
      <div id="benefits">
        <MainContainer style={{ backgroundColor: "#FF6F57" }}>
          <HeroTextContainer style={{ backgroundColor: "#FF6F57" }}>
            <MottoContainer>
              {this.props.intl.formatMessage({
                id: "landing.whatforyou.title"
              })}
            </MottoContainer>
            <ContentContainer>
              {this.props.intl.formatMessage({
                id: "landing.whatforyou.subtitle"
              })}
            </ContentContainer>
          </HeroTextContainer>
          <CarouselContainer>
            <AliceCarousel
              className={"whatsInForYouCarousel"}
              fadeOutAnimation={true}
              autoPlay={true}
              autoHeight={false}
              autoPlayInterval={3000}
              responsive={{ 0: { items: 1 } }}
              buttonsDisabled={true}
              keysControlDisabled={true}
              stopAutoPlayOnHover={false}
            >
              {this.state.width < 900
                ? imageRefs.mobile.map(eachRef => {
                    return (
                      <HeroImageContainer
                        src={eachRef.img}
                        title={eachRef.alt}
                        alt={eachRef.alt}
                      />
                    );
                  })
                : imageRefs.desktop.map(eachRef => {
                    return (
                      <HeroImageContainer
                        src={eachRef.img}
                        title={eachRef.alt}
                        alt={eachRef.alt}
                      />
                    );
                  })}
            </AliceCarousel>
          </CarouselContainer>
        </MainContainer>
      </div>
    );
  }
}

export default injectIntl(LeftTextHeroComponent);

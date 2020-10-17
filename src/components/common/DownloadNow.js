import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background: #ed1b2e;
`;
const Content = styled.div`
  width: 100%;
  color: #ffffff;
  text-align: center;
`;
const HeroTextTop = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
    font-size: 2rem;
  }
`;
const HeroText = styled.div`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ImageTag = styled.img`
  height: 50px;
  width: 170px;
  margin-right: 1rem;

  @media (max-width: 500px) {
    margin-right: 0;
    margin-top: 1rem;
  }
  @media (max-width: 900px) {
    margin-right: 0.25rem;
  }
`;

class DownloadNow extends Component {
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
    console.log(window.innerWidth);
    this.setState({ width: window.innerWidth });
  }
  render() {
    const locale = this.props.intl.locale;
    var image = 
      locale === "en"
        ? require("images/footer-banners/footer-banner-desktop-en.png")
        : require("images/footer-banners/footer-banner-desktop-bm.png");
    var mobileimage = 
        locale === "en"
          ? require("images/footer-banners/footer-banner-mobile.png")
          : require("images/footer-banners/footer-banner-mobile.png");
    var imagePlayStore =
      locale === "en"
        ? require("images/download_buttons/google-play-badge-borderless.png")
        : require("images/download_buttons/google-play-badge-bm-borderless.png");

    var imageAppStore =
      locale === "en"
        ? require("images/download_buttons/app-store-badge-borderless.png")
        : require("images/download_buttons/app-store-badge-borderless-bm.png");

    return (
     
        <Content className="bottom-parent-relative" id="download-now">
          <img
            src={this.state.width > 900 ? image : mobileimage}
            style={{
              width: "100%",
              height: "auto"
            }}
          />
          <div className="text-red bottom-text">
          {this.props.intl.formatMessage({
                  id: "common.downloadnow.landing"
                })}
          </div>
          <div className="text-white bottom-subtext">
          {this.props.intl.formatMessage({
                  id: "landing.hero.01.title"
                })}
          </div>
          <div className="latest-version-download-text">
          {this.props.intl.formatMessage({
                  id: "landing.hero.01.tagline"
                })}
          </div>
          <LogoContainer className="download-on-footer-banner">
            <a href="https://wedopulse.page.link/YAsJ" target="_blank">
              <ImageTag alt={"App store download"} src={imageAppStore} />
            </a>
            <a href="https://wedopulse.page.link/xZ9Z" target="_blank">
              <ImageTag alt={"Play store download"} src={imagePlayStore} />
            </a>
          </LogoContainer>
        </Content>
    );
  }
}
export default injectIntl(DownloadNow);

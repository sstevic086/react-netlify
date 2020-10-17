import React, { Component } from "react";

import { withRouter } from "react-router";

import styled from "styled-components";

import MediaQuery, { useMediaQuery } from "react-responsive";

import Popup from "./Popup";
// import Headroom from "react-headroom";

import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { injectIntl } from "react-intl";
const HeaderContainer = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;

const TriHeaderComponent = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(228, 228, 228);

  z-index: 0;
  height: 50px;
`;

const HeaderBrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderButtonsContainer = styled.div`
  vertical-align: middle;
  display: flex;
  text-align: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: none;
  }
`;
const HeaderButtons = styled.div`
  list-style: none;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const HeaderContainerMobile = styled.div`
  height: 50px;
  width: 100%;
`;

const TriHeaderComponentMobile = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(228, 228, 228);
  height: 100%;
  z-index: 0;
`;

const LanguageButtons = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  color: ${props => (props.isActive ? "#000" : "#aaa")};
`;

const HeaderBrandContainerMobile = styled.div`
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

const HeaderButtonsContainerMobile = styled.div`
  height: 100%;
  vertical-align: middle;
`;
const HeaderButtonsMobile = styled.div`
  height: 100%;
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
`;

const HeaderBrandLongMobile = styled.a`
  position: relative;
  padding-left: 14px;
  vertical-align: middle;
  white-space: nowrap;
`;

const HeaderBrandLong = styled.a`
  position: relative;
  padding-left: 14px;
  vertical-align: middle;
  white-space: nowrap;
`;
const DownloadButton = styled.a`
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #ed1b2e;
  line-height: 1rem;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    background-color: #eb3f4f;
  }
  @media (max-width: 700px) {
    height: 100%;
  }
  text-decoration: none;
`;
const RegularButton = styled.div`
  font-weight: 400;
  color: #84929a;
  display: flex;
  align-items: center;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  padding: 0 2rem;
  :hover {
    background-color: #eee;
  }
  @media (min-width 700px) {
    display: none;
  }
`;
const Headroom = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 0;
  height: 50px;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      loading: true,
      dropdown: false
    };
  }

  componentDidMount() {
    if (window.location.hash.length > 0) {
      const element = document.getElementById(window.location.hash.slice(1));

      console.log(window.location.hash);

      const top = element ? element.offsetTop - 45 : 0;

      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top
      });
    }
  }

  render() {
    const isHome =
      window.location.pathname === "/" || window.location.pathname === "/";
    const navItems = [
      {
        title: "header.home",
        id: "home"
      },
      {
        title: "header.features",
        id: "letsgetpersonal"
      },
      {
        title: "header.benefits",
        id: "benefits"
      }
      // {
      //   title: "Events",
      //   id: "events"
      // }
    ];
    return (
      <Headroom
        style={{
          zIndex: 100
        }}
      >
        <MediaQuery maxWidth={700}>
          <HeaderContainerMobile>
            <TriHeaderComponentMobile>
              <HeaderBrandContainerMobile>
                <HeaderBrandLongMobile>
                  <Popup setLanguage={this.props.setLanguage} />
                </HeaderBrandLongMobile>
                <HeaderBrandLongMobile>
                  <Link to={"/"}>
                    <img
                      id="pulse_logo"
                      src={require("images/pulse-logo.svg")}
                      title="Pulse"
                      style={{
                        height: "50px",
                        width: "auto"
                      }}
                      alt=""
                    />
                  </Link>
                </HeaderBrandLongMobile>
              </HeaderBrandContainerMobile>

              <HeaderButtonsContainerMobile>
                <HeaderButtonsMobile>
                  <DownloadButton href="#download-now">
                    {this.props.intl.formatMessage({
                      id: "header.download-button"
                    })}
                  </DownloadButton>
                </HeaderButtonsMobile>
              </HeaderButtonsContainerMobile>
            </TriHeaderComponentMobile>
          </HeaderContainerMobile>
        </MediaQuery>
        <HeaderContainer>
          <TriHeaderComponent>
            <HeaderBrandContainer>
              <HeaderBrandLong>
                <Link to={"/"}>
                  <img
                    id="pulse_logo"
                    src={require("images/pulse-logo.svg")}
                    title="Pulse"
                    style={{
                      height: "50px",
                      width: "auto"
                    }}
                    alt=""
                  />
                </Link>
              </HeaderBrandLong>
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <LanguageButtons
                  isActive={this.props.language === "en"}
                  onClick={() => {
                    this.props.setLanguage("en");
                  }}
                >
                  EN
                </LanguageButtons>
                <div
                  style={{
                    height: "15px",
                    width: "1px",
                    border: `0.5px solid #ccc`
                  }}
                />
                <LanguageButtons
                  isActive={this.props.language === "my"}
                  onClick={() => {
                    this.props.setLanguage("my");
                  }}
                >
                  BM
                </LanguageButtons>
              </div>
            </HeaderBrandContainer>

            <HeaderButtonsContainer>
              <HeaderButtons>
                {navItems.map(item => (
                  <RegularButton
                    onClick={() => {
                      if (!isHome) {
                        window.location = `#${item.id}`;
                      } else {
                        const element = document.getElementById(item.id);

                        window.scrollTo({
                          behavior: element ? "smooth" : "auto",
                          top: element ? element.offsetTop - 45 : 0
                        });
                      }
                    }}
                  >
                    <div>
                      {item.title &&
                        this.props.intl.formatMessage({
                          id: item.title
                        })}
                    </div>
                  </RegularButton>
                ))}

                <DownloadButton href="#download-now">
                  {this.props.intl.formatMessage({
                    id: "header.download-button"
                  })}
                </DownloadButton>
              </HeaderButtons>
            </HeaderButtonsContainer>
          </TriHeaderComponent>
        </HeaderContainer>
      </Headroom>
    );
  }
}

export default (Header = withRouter(injectIntl(Header)));

import React, { Component } from "react";
import styled from "styled-components";
import MainHero from "components/promo-template/MainHero";
import DownloadNow from "components/common/DownloadNow";
import Terms from "../../../components/promo-template/TermsAndConditions";
import TileList from "components/promo-template/TileList";
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";

const PageComponent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
`;

const PageContent = styled.div`
  width: 70%;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const HeroContent = styled.div`
  color: #687379;
  font-size: 18px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 2rem 0;
`;

class PromotionTemplatePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.intl.locale === "my")
      this.props.history.push("/p/kami-belanja-anda-hari-ini");
  }
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <MainHero
              HeroTile={require("images/assets/starbucksreward-2x.png")}
              Header={"Enjoy a treat from us today*"}
              Desc={
                "Cheat day just got sweeter!\n \nDownload Pulse by Prudential and get started to enjoy 10% off your favourite treats at Starbucks."
              }
              alt={
                "Download the Pulse App And Register To Enjoy 10% Discounts At Starbucks"
              }
            />
            <TileList
              Title="How to redeem your coupon?"
              Content1={
                "Download Pulse by Prudential on Google Play or the App Store"
              }
              Content2={"Register yourself in the app"}
              Content3={
                "Enjoy your treat at any Starbucks outlet within Malaysia"
              }
            />
            <HeroContent>
              So, let's get acquainted!
              <div
                style={{
                  padding: "0.5rem 0"
                }}
              >
                Download Pulse by Prudential now.
              </div>
            </HeroContent>

            <Terms
              Star="*"
              MiniHeader="Terms and Conditions"
              ListItem={
                <div>
                  <li>
                    10% discount on food and beverages at the a la carte menu
                    only.
                  </li>
                  <li>
                    Not valid with any other promotions, discounts, or set
                    meals.
                  </li>
                  <li>
                    Discount not applicable for Starbucks merchandise, packaged
                    food, bottled drinks and whole beans.
                  </li>
                  <li>Not valid for Starbucks Reserve Bar.</li>
                  <li>Valid until 31st August, 2020.</li>
                </div>
              }
            />
          </PageContent>
        </PageComponent>
        <DownloadNow titleText={"Together we can win at health."} />
      </div>
    );
  }
}

export default injectIntl(withRouter(PromotionTemplatePage));

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

const TextContainer = styled.div`
  padding: 1rem 0;
`;

const TextHead = styled.div`
  font-size: 30px;
  color: #ee142a;
`;

const TextContent = styled.div`
  color: #687379;
  font-size: 20px;
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
  padding: 0.5rem 0;
`;

class OctChallenge extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.intl.locale === "my")
      this.props.history.push("/p/bergerak-melawan-kanser-bulan-oktober-ini");
  }
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <MainHero
              HeroTile={require("images/assets/oct_challenge.png")}
              Header={"Step up for cancer this October."}
              Content={"Campaign Period: 21 October – 19 November 2019"}
              Desc={
                "Go the distance for your health and others! Walk, run and move your body for a good cause. \n\nPulse by Prudential will donate RM10,000 to the National Cancer Society Malaysia once we've collectively hit 150 million steps. That means you too can contribute to this cause with every step you take. \n\nBut that's not all. "
              }
              alt={
                "Be rewarded when you step up for cancer - Pulse by Prudential"
              }
            />
            <HeroContent>
              Top 10 steppers will walk away with <b>RM100 Boost credits.</b>
            </HeroContent>
            <TileList
              Title="How does it work?"
              Content1={"Join this month's challenge on Pulse by Prudential"}
              Content2={"Hook up your tracking device"}
              Content3={"Walk, run and move as much as you can"}
            />
            <TextContainer>
              <TextContent>
                Invite a friend or two to join in on our mission to help others
                and promote good health!
              </TextContent>
            </TextContainer>
            <TextHead
              style={{
                color: "#687379",
                padding: "1rem 0"
              }}
            >
              Ready? Let's get started!
            </TextHead>

            <Terms
              MiniHeader="Terms & Conditions"
              ListItem={
                <div>
                  <li>
                    These Challenges are offered at the sole discretion of
                    Pulse. By joining these Challenges, you agree that you have
                    read, understood and agreed to be bound by the terms and
                    conditions of these Challenges and by any change or
                    modification Pulse may make to the Challenges without prior
                    notice.
                  </li>
                  <li>
                    Pulse shall have the absolute discretion in respect of all
                    matters and disputes concerning these Challenges including
                    deciding the winners which shall be based on data pulled
                    from Pulse’s health data aggregation system. No appeals will
                    be entertained.
                  </li>
                  <li>
                    Each individual participant shall be eligible to win a
                    maximum of three (3) times consecutively for all Challenges
                    organised by Pulse.
                  </li>
                  <li>
                    Ten (10) individual participants with the highest number of
                    steps for this Step Up for Cancer Challenge will each
                    receive a RM100 Boost Voucher (“Boost Voucher Winner”).
                    <div>
                      <ul>
                        <li>
                          Each Boost Voucher Winner shall be entitled to only
                          one (1) RM100 Boost Voucher per Step Up for Cancer
                          Challenge.
                        </li>
                        <li>
                          The RM100 Boost Voucher can only be redeemed via the
                          Boost app.
                        </li>
                        <li>
                          Each RM100 Boost Voucher redeemed will equate to RM100
                          Boost credits in the Boost app.
                        </li>
                        <li>
                          Boost Voucher Winner shall redeem the RM100 Boost
                          Vouchers by tapping on the ‘Redemption Code’ section
                          in the Profile page (last tab) of the Boost app.
                        </li>
                        <li>
                          Each Boost account will be allowed to redeem a maximum
                          of one (1) RM100 Boost Vouchers only.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    The RM100 Boost Voucher shall not be transferable, not
                    exchangeable and not redeemable for cash, credit or in kind.
                  </li>
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

export default injectIntl(withRouter(OctChallenge));

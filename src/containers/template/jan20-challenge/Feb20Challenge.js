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

class Feb20Challenge extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.intl.locale === "my")
      this.props.history.push("/p/tahun-baru-dini-baru");
  }
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <MainHero
              HeroTile={require("images/assets/1200x730English-01.png")}
              Header={"Don’t wait another year. Let’s get active!"}
              Content={"Campaign Period: 1 – 29 February 2020"}
              Desc={
                "More than fifty percent of those who set New Year’s resolutions give up by the end of January. Don’t lose heart - take on the February steps challenge and see how many steps you can crush this month!"
              }
              alt={"Let’s get active! - Pulse by Prudential"}
            />
            <HeroContent>
              Here are some sweet rewards for steppers who take their New Year’s
              fitness resolutions seriously:
              <ul>
                <li>
                  The top 3 highest steppers will win a Fitbit device each
                </li>
                <li>
                  The 4th till 50th highest steppers will walk away with RM50
                  Boost Credits
                </li>
              </ul>
            </HeroContent>
            <TileList
              Title="How does it work?"
              Content1={"Join this month's challenge on Pulse by Prudential"}
              Content2={"Hook up your tracking device"}
              Content3={"Walk, run and move as much as you can"}
            />
            <TextContainer>
              <TextContent>
                Grab your family and friends to join you and beat them in our
                leaderboard. Crush February and show your New Year’s resolutions
                who’s boss.
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
                    The February 2020 Challenge: The Dawn of a New You
                    (“Challenge”) is offered at the sole discretion of Pulse by
                    Prudential (“Pulse”). By joining this Challenge, you agree
                    that you have read, understood and agreed to be bound by the
                    terms and conditions of the Challenge, and by any change or
                    modification Pulse may make to the Challenge without prior
                    notice.
                  </li>
                  <li>
                    Pulse shall have the absolute discretion in respect of all
                    matters and disputes concerning the Challenge including
                    deciding the winners which shall be based on data pulled
                    from Pulse’s health data aggregation system. No appeals will
                    be entertained.
                  </li>
                  <li>
                    The three (3) individual participants of the Challenge with
                    the highest number of steps will each receive a Fitbit
                    Inspire HR Black.
                  </li>
                  <li>
                    Individual participants of the Challenge with the fourth
                    (4th) to fiftieth (50th) highest number of steps will each
                    receive a RM50 Boost Voucher (“Boost Voucher Winner" ).
                    <div>
                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li>
                          Each Boost Voucher Winner shall be entitled to only
                          one (1) RM50 Boost Voucher.
                        </li>
                        <li>
                          The RM50 Boost Voucher can only be redeemed via the
                          Boost app.
                        </li>
                        <li>
                          Each RM50 Boost Voucher redeemed will equate to RM50
                          Boost credits in the Boost app.
                        </li>
                        <li>
                          Boost Voucher Winners shall redeem the RM50 Boost
                          Vouchers by tapping on the ‘Redemption Code’ section
                          in the Profile page (last tab) of the Boost app.
                        </li>
                        <li>
                          Each Boost account will be allowed to redeem a maximum
                          of ten (10) RM50 Boost Vouchers only.
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    The RM50 Boost Voucher and the Fitbit Inspire HR Black shall
                    not be transferable, not exchangeable and not redeemable for
                    cash, credit or in kind.
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

export default injectIntl(withRouter(Feb20Challenge));

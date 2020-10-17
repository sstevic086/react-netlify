import React, { Component } from "react";
import styled from "styled-components";
// import MainHero from "components/promo-template/MainHero";
import DownloadNow from "components/common/DownloadNow";
import Terms from "../../../components/promo-template/TermsAndConditions";
import TileList from "components/promo-template/TileList";
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";

const ImageContainer = styled.div`
  padding: 1rem 0;
`;
const ImageTile = styled.img`
  height: auto;
  width: 100%;
  align-items: center;
  border-radius: 5px;
`;

const HeroHeader = styled.div`
  color: #687379;
  font-size: 48px;
  font-weight: 600;
  padding: 1rem 0;
  text-align: left;
  @media(max-width: 500px){
    font-size: 35px;
  }
`;

const HeroHeaderContent = styled.div`
  color: #687379;
  font-size: 18px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 0.5rem 0;
`;

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
            {/* <MainHero
              HeroTile={require("images/assets/1200-x-730-ENG.png")}
              Header={"Want to lose weight but don’t know where to start? Then this challenge is for you."}
              Content={"Campaign Period: 1 – 31 March 2020"}
              Desc={
                "Walking. It’s quick, effective and you can do it anywhere. It helps you lose weight, reduce stress, reduce blood pressure as well as other health benefits. Every weekend, for a month, take a brisk , whether by yourself, with friends or family, for 40 mins (about 5,000 steps). Complete this challenge and you would have covered approximately 5km every weekend. Of course, the more you walk, the more calories you'll burn!"
              }
              alt={"Let’s get active! - Pulse by Prudential"}
            /> */}
            <ImageContainer>
              <ImageTile src={
                require("images/assets/1200-x-730-ENG.png")
              }/>
            </ImageContainer>
            <HeroHeaderContent>
              Campaign Period: 9 March - 8 April, 2020
            </HeroHeaderContent>
              <HeroHeader style={{
                lineHeight: "90%"
              }}>
              Want to lose weight but don’t know where to start? Then this challenge is for you.
              </HeroHeader>
              <HeroHeaderContent>
              Walking. It’s quick, effective and you can do it anywhere. It helps you lose weight, reduce stress, reduce blood pressure as well as other health benefits. Every weekend, for a month, take a brisk , whether by yourself, with friends or family, for 40 mins (about 5,000 steps). Complete this challenge and you would have covered approximately 5km every weekend. Of course, the more you walk, the more calories you'll burn!
              </HeroHeaderContent>
            <HeroContent>
              Here are some sweet rewards for steppers who take their health goals seriously:
              <ul>
                <li>
                The top 50 highest steppers will walk away with RM50 Boost Credits
                </li>
                {/* <li>
                  The 4th till 50th highest steppers will walk away with RM50
                  Boost Credits
                </li> */}
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
              Grab your family and friends to join you and beat them in our leaderboard.
              </TextContent>
            </TextContainer>
            {/* <TextHead
              style={{
                color: "#687379",
                padding: "1rem 0"
              }}
            >
              Ready? Let's get started!
            </TextHead> */}

            <Terms
              MiniHeader="Terms & Conditions"
              ListItem={
                <div>
                  <li>
                  The March 2020 Challenge: Walk Off The Weight (“Challenge”) is offered at the sole
discretion of Pulse by Prudential (“Pulse”). By joining this Challenge, you agree that you
have read, understood and agree to be bound by the terms and conditions of the
Challenge, and by any change or modification Pulse may make to the Challenge without
prior notice.
                  </li>
                  <li>
                  Pulse shall have absolute discretion in respect of all matters and disputes concerning
the Challenge, including deciding the winners which shall be based on data pulled from
Pulse’s health data aggregation system. No appeals will be entertained.
                  </li>
                  <li>
                  Fifty (50) individual participants of the Challenge with the highest number of
steps will each receive RM50 Boost Credits (“Boost Credits Winner”).
                    <div>
                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li>
                        Each Boost Credits Winner shall be entitled to only RM50 Boost Credit per
Challenge.
                        </li>
                        <li>
                        Each Boost Credits Winner will receive an email containing the redemption code for
the RM50 Boost Credits.
                        </li>
                        <li>
                        Each individual participant shall be eligible to win a maximum of three (3) times consecutively for all Challenges organised by Pulse.
                        </li>
                        <li>
                        The RM50 Boost Credit can only be redeemed via the Boost app by tapping on the
‘Redemption Code’ section in the Profile page (last tab) of the Boost app and
inserting the redemption code emailed to the Boost Credit Winners. Once redeemed,
RM50 Boost Credits will be reflected in the Boost app.
                        </li>
                       
                      </ol>
                    </div>
                  </li>
                  <li>
                  The RM50 Boost Credits shall not be transferable, not exchangeable and not
redeemable for cash, credit or in kind.
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

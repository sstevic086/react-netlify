import React, { Component } from "react";
import styled from "styled-components";
import WhatsHappening from "components/events/WhatsHappening";
import FindOutMore from "components/events/LearnMore";
import DownloadNow from "components/common/DownloadNow";
import { injectIntl } from "react-intl";

import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";

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

class EventsPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  EnjoyTreat = () => {
    this.props.history.push(
      this.props.intl.formatMessage({
        id: "promos.1.link"
      })
    );
  };

  MilesToSmiles = () => {
    this.props.history.push(
      this.props.intl.formatMessage({
        id: "events.1.link"
      })
    );
  };
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <div>
              <WhatsHappening
                onClick={this.MilesToSmiles}
                Header={"What's Happening?"}
                SubHeader={
                  " Stay up-to-date with the latest events and announcements."
                }
                Image={require("images/assets/event-FitforRewards-2x.png")}
                Content={
                  "Go the extra mile and be awarded! Stand a chance to walk away with irresistible prizes when you achieve 155,000 steps or more this month."
                }
              />
              <div onClick={this.MilesToSmiles}>
                <FindOutMore />
              </div>
            </div>
            <div>
              <WhatsHappening
                onClick={this.EnjoyTreat}
                Header={"Promotions"}
                SubHeader={
                  " Get rewarded with out exciting promotions and offers!"
                }
                Image={require("images/assets/starbucksreward-2x.png")}
                Content={
                  "Your cheat day just got sweeter! Download Pulse by Prudential and register yourself to enjoy 10% off your favourite treats at Starbucks."
                }
              />
              <div onClick={this.EnjoyTreat}>
                <FindOutMore />
              </div>
            </div>
          </PageContent>
        </PageComponent>
        <DownloadNow
          titleText={this.props.intl.formatMessage({
            id: "common.downloadnow.togetherwecanwin"
          })}
        />
      </div>
    );
  }
}
export default withRouter(injectIntl(EventsPage));

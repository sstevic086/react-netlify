import React, { Component } from "react";
import styled from "styled-components";
import WhatsHappening from "components/events/WhatsHappening";
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

const FindOutMore = styled.div`
  color: #ed1b2e;
  font-size: 20px;
  fon-weight: 400;
  white-space: pre-wrap;
  text-align: left;
  cursor: pointer;
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
                Header={"Apa yang sedang berlaku?"}
                SubHeader={
                  " Jangan terlepas lagi. Dapatkan info tentang acara dan pengumuman terkini kami."
                }
                Image={require("images/assets/event-FitforRewards-bm-2x.png")}
              />
              <div onClick={this.MilesToSmiles}>
                <FindOutMore> Ketahui lebih lanjut.</FindOutMore>
              </div>
            </div>
            <div>
              <WhatsHappening
                onClick={this.EnjoyTreat}
                Header={"Promosi"}
                SubHeader={
                  "Nikmati ganjaran dengan tawaran dan promosi menarik kami!"
                }
                Image={require("images/assets/starbucksreward-bm-2x.png")}
              />
              <div onClick={this.EnjoyTreat}>
                <FindOutMore> Ketahui lebih lanjut.</FindOutMore>
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

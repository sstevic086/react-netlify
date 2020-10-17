import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";

import HeaderScrollComponent from "components/common/HeaderScrollComponent";
import HeadTextComponent from "components/common/HeadTextComponent";
import FloatTextComponent from "components/common/FloatTextComponent";
import LeftTextHeroComponent from "components/common/LeftTextHeroComponent";
import WaitTheresMore from "components/common/WaitTheresMore";
import DownloadNow from "components/common/DownloadNow";

class ChallengeYourself extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          id: 0,
          contentName: this.props.intl.formatMessage({
            id: "challenge.component.1.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-bg-fitnesstracker.png"),
            mobile: require("images/assets/img-fitnesstracker-2x.png")
          }
        },
        {
          id: 1,
          contentName: this.props.intl.formatMessage({
            id: "challenge.component.2.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-bg-fitnesschallenge.png"),
            mobile: require("images/assets/img-fitnesschallenge-2x.png")
          }
        }
      ],
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
    return (
      <div
        style={{
          marginTop: 100
        }}
      >
        <HeaderScrollComponent
          title={this.props.intl.formatMessage({
            id: "challenge.title.full"
          })}
          contents={this.state.contents}
        />
        <HeadTextComponent
          title={this.props.intl.formatMessage({
            id: "challenge.title.firsthalf"
          })}
          titleU={this.props.intl.formatMessage({
            id: "challenge.title.ribbontext"
          })}
          subtitle={this.props.intl.formatMessage({
            id: "challenge.title.subtitle"
          })}
        />
        <div ref={this.state.contents[0].ref}>
          <FloatTextComponent
            title={this.props.intl.formatMessage({
              id: "challenge.component.1.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "challenge.component.1.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "challenge.component.1.content"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[0].imageRef.desktop
                : this.state.contents[0].imageRef.mobile
            }
            colorRef={"#ff6f57"}
            borderColorRef={"orange"}
            buttonVisibility={"hidden"}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
          />
        </div>
        <div ref={this.state.contents[1].ref}>
          <LeftTextHeroComponent
            title={this.props.intl.formatMessage({
              id: "challenge.component.2.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "challenge.component.2.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "challenge.component.2.content"
            })}
            buttonText={this.props.intl.formatMessage({
              id: "button.join-challenge"
            })}
            buttonText2={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[1].imageRef.desktop
                : this.state.contents[1].imageRef.mobile
            }
            colorRef={"#7769ab"}
            buttonVisibility={"visible"}
            button1RedirectTo={this.props.intl.formatMessage({
              id: "jan20.1.link"
            })}
            youtubeId={
              this.props.intl.locale === "en" ? "6KXtNlmXprE" : "-cdpyQG_e6w"
            }
          />
        </div>
        <WaitTheresMore
          cards={[
            {
              content: this.props.intl.formatMessage({
                id: "common.waittheresmore.health"
              }),
              imgUrl: require("images/assets/img-tab-1health-2x.png"),
              redirectTo: "/personal-health-assistant"
            },
            {
              content: this.props.intl.formatMessage({
                id: "common.waittheresmore.alert"
              }),
              imgUrl: require("images/assets/img-tab-3inform-2x.png"),
              redirectTo: "/alerts-and-notifications"
            }
            // {
            //     content: "Event and promotions",
            //     imgUrl:require("images/assets/img-tab-4events-2x.png"),

            //     redirectTo: ""
            // }
          ]}
        />
        <DownloadNow
          titleText={this.props.intl.formatMessage({
            id: "challenge.component.downloadnow"
          })}
        />
      </div>
    );
  }
}

export default injectIntl(withRouter(ChallengeYourself));

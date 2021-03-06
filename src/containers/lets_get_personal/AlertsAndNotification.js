import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { withRouter } from "react-router-dom";

import HeaderScrollComponent from "components/common/HeaderScrollComponent";
import HeadTextComponent from "components/common/HeadTextComponent";
import FloatTextComponent from "components/common/FloatTextComponent";
import FloatImageComponent from "components/common/FloatImageComponent";
import RightTextHeroComponent from "components/common/RightTextHeroComponent";
import WaitTheresMore from "components/common/WaitTheresMore";
import DownloadNow from "components/common/DownloadNow";

import { Helmet } from "react-helmet";
class AlertsAndNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          id: 0,
          contentName: this.props.intl.formatMessage({
            id: "alert.component.1.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop:
              this.props.intl.locale === "en"
                ? require("images/assets/img-bg-findclinic-en-edited.png")
                : require("images/assets/img-bg-findclinic-bm-edited.png"),
            mobile:
              this.props.intl.locale === "en"
                ? require("images/assets/ig-findclinic-eng-2x.png")
                : require("images/assets/ig-findclinic-bm-2x.png")
          }
        },
        {
          id: 1,
          contentName: this.props.intl.formatMessage({
            id: "alert.component.2.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-denguealert.png"),
            mobile: require("images/assets/img-denguealert-2x.png")
          }
        },
        {
          id: 2,
          contentName: this.props.intl.formatMessage({
            id: "alert.component.3.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop:
              this.props.intl.locale === "en"
                ? require("images/assets/img-bg-insan.png")
                : require("images/assets/img-bg-insan-bm.png"),

            mobile:
              this.props.intl.locale === "en"
                ? require("images/assets/img-insan-2x.png")
                : require("images/assets/img-insan-bm-2x.png")
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
        <Helmet>
          <meta
            name="keywords"
            content="pulse, prudential pulse,pru pulse,pulse app, prudential pulse app, prudential health app, clinic finder, clinic near me, hospital finder, hospital near me, dengue alert, dengue hotspot alert, dengue symptoms, dengue fever, dengue fever symptoms, dengue treatment, dengue prevention, dengue test, signs dengue, aplikasi prudential, aplikasi android prudential,aplikasi ios pridential, aplikasi pluse, aplikasi prudential, apikasi prudential pulse, aplikasi prudential kesihatan, app prudential kesihatan, sihat prudential, cergas prudential, segar prudential, afiat prudential, aktif prudential, kesihatan prudential, kecergasan prudential, sihat pru, cergas pru, segar pru, afiat pru, aktif pru, kesihatan pru, kecergasan pru, sihat aplikasi, cergas aplikasi, segar aplikasi, afiat aplikasi,aktif aplikasi, kesihatan aplikasi, kecergasan aplikasi, sihat pulse, cergas pulse, segar pulse, afiat pulse, aktif pulse, kesihatan pulse, kecergasan pulse, sihat app, cergas app, segar app, afiat app, aktif app, kesihatan app, kecergasan app, kawasan denggi, amaran denggi, simptom denggi, penyakit denggi, deman denggi, gejala denggi, tip denggi, klinik dekat, senarai klinik, doktor dekat, hospital dekat, konsultasi doktor, talian konsultasi doktor, talian ubat, call doktor, talian doktor, video doktor"
          />
        </Helmet>
        <HeaderScrollComponent
          title={this.props.intl.formatMessage({
            id: "alert.title.full"
          })}
          contents={this.state.contents}
        />
        <HeadTextComponent
          title={this.props.intl.formatMessage({
            id: "alert.title.firsthalf"
          })}
          titleU={this.props.intl.formatMessage({
            id: "alert.title.ribbontext"
          })}
          title2={this.props.intl.formatMessage({
            id: "alert.title.secondhalf"
          })}
          subtitle={this.props.intl.formatMessage({
            id: "alert.title.subtitle"
          })}
        />
        <div ref={this.state.contents[0].ref}>
          <FloatTextComponent
            title={this.props.intl.formatMessage({
              id: "alert.component.1.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "alert.component.1.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "alert.component.1.content"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[0].imageRef.desktop
                : this.state.contents[0].imageRef.mobile
            }
            colorRef={"#B095FF"}
            borderColorRef={"purple-light"}
            // buttonText={this.props.intl.formatMessage({
            //   id: "health.component.3.buttontext"
            // })}
          />
        </div>

        <div ref={this.state.contents[1].ref}>
          <FloatImageComponent
            title={this.props.intl.formatMessage({
              id: "alert.component.2.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "alert.component.2.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "alert.component.2.content"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[1].imageRef.desktop
                : this.state.contents[1].imageRef.mobile
            }
            colorRef={"#ff8095"}
            borderColorRef={"pink"}
            buttonVisibility={"visible"}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
            youtubeId={
              this.props.intl.locale === "en" ? "uHK-RLWjdJc" : "t5HY6_HkR2Q"
            }
          />
        </div>

        <div ref={this.state.contents[2].ref}>
          <RightTextHeroComponent
            title={this.props.intl.formatMessage({
              id: "alert.component.3.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "alert.component.3.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "alert.component.3.content"
            })}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[2].imageRef.desktop
                : this.state.contents[2].imageRef.mobile
            }
            colorRef={"#4cb58c"}
            buttonVisibility={"hidden"}
          />
        </div>

        <WaitTheresMore
          cards={[
            {
              content: this.props.intl.formatMessage({
                id: "common.waittheresmore.challenge"
              }),
              imgUrl: require("images/assets/img-tab-2challenge-2x.png"),
              redirectTo: `/challenge-yourself`
            },
            {
              content: this.props.intl.formatMessage({
                id: "common.waittheresmore.health"
              }),
              imgUrl: require("images/assets/img-tab-1health-2x.png"),
              redirectTo: `/personal-health-assistant`
            }
            /*{
                content: "Event and promotions",
                imgUrl:require("images/assets/img-tab-4events-2x.png"),
                redirectTo: ""
            }*/
          ]}
        />
        <DownloadNow
          titleText={this.props.intl.formatMessage({
            id: "alert.component.downloadnow"
          })}
        />
      </div>
    );
  }
}

export default injectIntl(withRouter(AlertsAndNotification));

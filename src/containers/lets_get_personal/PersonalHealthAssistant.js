import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";

import HeaderScrollComponent from "components/common/HeaderScrollComponent";
import HeadTextComponent from "components/common/HeadTextComponent";
import FloatTextComponent from "components/common/FloatTextComponent";
import FloatImageComponent from "components/common/FloatImageComponent";
import RightTextHeroComponent from "components/common/RightTextHeroComponent";
import WaitTheresMore from "components/common/WaitTheresMore";
import DownloadNow from "components/common/DownloadNow";

import { Helmet } from "react-helmet";

class PersonalHealthAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          id: 0,
          contentName: this.props.intl.formatMessage({
            id: "health.component.1.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-bg-healthasses.png"),
            mobile: require("images/assets/img-healthasses-2x.png")
          }
        },
        {
          id: 1,
          contentName: this.props.intl.formatMessage({
            id: "health.component.2.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-symptomchecker.png"),
            mobile: require("images/assets/img-symptomchecker-2x.png")
          }
        },
        {
          id: 2,
          contentName: this.props.intl.formatMessage({
            id: "health.component.3.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-bg-onlinecon.png"),
            mobile: require("images/assets/img-onlineconsult-2x.png")
          }
        },
        {
          id: 3,
          contentName: this.props.intl.formatMessage({
            id: "health.component.4.title"
          }),
          ref: React.createRef(),
          imageRef: {
            desktop: require("images/assets/img-healthfacts.png"),
            mobile: require("images/assets/img-healthtips-2x.png")
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
            content="pulse, prudential pulse,pru pulse,pulse app, prudential pulse app, prudential health app, health assessment, health assessment app, health fitness, health fitness app, health wellness, health care, health check, health test, health queries, self diagnosis, health care app, health app, medical diagnosis, health scan, health check up, body check, digital twin, symptom checker, check symptoms, online consultation, doctor consultation online, medical check online, online delivery medicine, e prescription, emergency medical, doctor availability, call doctor, video call doctor, online doctor, doc online, health check online, consult physician online, online doctor consultation, body check online, medical diagnosis online,  aplikasi prudential, aplikasi android prudential,aplikasi ios pridential, aplikasi pluse, aplikasi prudential, apikasi prudential pulse, aplikasi prudential kesihatan, app prudential kesihatan, sihat prudential, cergas prudential, segar prudential, afiat prudential, aktif prudential, kesihatan prudential, kecergasan prudential, sihat pru, cergas pru, segar pru, afiat pru, aktif pru, kesihatan pru, kecergasan pru, sihat aplikasi, cergas aplikasi, segar aplikasi, afiat aplikasi,aktif aplikasi, kesihatan aplikasi, kecergasan aplikasi, gejala sihat, gejala cergas, gejala kesihatan, gejala kercergasan, gejala penyakit, simptom sihat, simptom cergas, simptom kesihatan, simptom kercergasan, simptom penyakit, diagnosis perubatan, diagnosis kesihatan, diagnosis kecergasan, diagnosis penyakit, pemeriksaan badan, pemeriksaan penyakit"
          />
        </Helmet>
        <HeaderScrollComponent
          title={this.props.intl.formatMessage({
            id: "health.title.full"
          })}
          contents={this.state.contents}
        />
        <HeadTextComponent
          title={this.props.intl.formatMessage({
            id: "health.title.firsthalf"
          })}
          titleU={this.props.intl.formatMessage({
            id: "health.title.ribbontext"
          })}
          title2={this.props.intl.formatMessage({
            id: "health.title.secondhalf"
          })}
          subtitle={this.props.intl.formatMessage({
            id: "health.title.subtitle"
          })}
        />
        <div ref={this.state.contents[0].ref}>
          <FloatTextComponent
            title={this.props.intl.formatMessage({
              id: "health.component.1.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "health.component.1.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "health.component.1.content"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[0].imageRef.desktop
                : this.state.contents[0].imageRef.mobile
            }
            colorRef={"#ff8095"}
            borderColorRef={"pink"}
            buttonVisibility={"visible"}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
            youtubeId={
              this.props.intl.locale === "en" ? "pCbciIP_Ta4" : "uBwYWBR8x9k"
            }
          />
        </div>
        <div ref={this.state.contents[1].ref}>
          <FloatImageComponent
            title={this.props.intl.formatMessage({
              id: "health.component.2.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "health.component.2.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "health.component.2.content"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[1].imageRef.desktop
                : this.state.contents[1].imageRef.mobile
            }
            colorRef={"#ff6f57"}
            borderColorRef={"orange"}
            buttonVisibility={"visible"}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
            youtubeId={
              this.props.intl.locale === "en" ? "tAkQwKfJ3Ns" : "gXecpAbvVaA"
            }
          />
        </div>
        <div ref={this.state.contents[2].ref}>
          <RightTextHeroComponent
            title={this.props.intl.formatMessage({
              id: "health.component.3.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "health.component.3.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "health.component.3.content"
            })}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[2].imageRef.desktop
                : this.state.contents[2].imageRef.mobile
            }
            colorRef={"#086ada"}
            buttonVisibility={"visible"}
            youtubeId={
              this.props.intl.locale === "en" ? "rCee41LIxko" : "jvlOxGcudkI"
            }
          />
        </div>

        <div ref={this.state.contents[3].ref}>
          <FloatImageComponent
            title={this.props.intl.formatMessage({
              id: "health.component.4.title"
            })}
            motto={this.props.intl.formatMessage({
              id: "health.component.4.motto"
            })}
            content={this.props.intl.formatMessage({
              id: "health.component.4.content"
            })}
            imageRef={
              this.state.width > 900
                ? this.state.contents[3].imageRef.desktop
                : this.state.contents[3].imageRef.mobile
            }
            colorRef={"#fab11d"}
            borderColorRef={"yellow"}
            buttonVisibility={"hidden"}
            buttonText={this.props.intl.formatMessage({
              id: "health.component.3.buttontext"
            })}
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
                id: "common.waittheresmore.alert"
              }),
              imgUrl: require("images/assets/img-tab-3inform-2x.png"),
              redirectTo: `/alerts-and-notifications`
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
            id: "health.component.downloadnow"
          })}
        />
      </div>
    );
  }
}

export default injectIntl(withRouter(PersonalHealthAssistant));

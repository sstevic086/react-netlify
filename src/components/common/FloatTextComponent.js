import React, { Component } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import VideoPopUp from "components/common/VideoPopUp";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100%;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 900px) {
    max-height: unset;
    flex-direction: column;
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 336px;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 10rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 1700px) {
    padding: 8rem;
  }
  @media (max-width: 1350px) {
    padding: 6.5rem;
  }
  @media (max-width: 1250px) {
    padding: 5rem;
  }
  @media (max-width: 1000px) {
    padding: 3rem;
  }

  @media (max-width: 900px) {
    background-image: unset;
    width: unset;
    max-height: unset;
    min-width: unset;
    background-size: cover;
    padding: 1rem;
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  font-family: FSAlbert-ExtraBold;
  position: relative;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  margin: 1rem 0.5rem.5rem;
`;

const MottoContainer = styled.div`
  font-family: FSAlbert-Bold;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  padding: 1rem 0.5rem;
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

const ContentContainer = styled.div`
  font-family: FSAlbert-Regular;
  font-size: 16.5px;
  color: #ffffff;
  padding: 1rem 0.5rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 1rem 0;
`;

const Button = styled.div`
  font-family: FSAlbert-Regular;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  padding: 0 1rem;
  display: inline-block;
  line-height: 36px;
  background: #ffffff;
  border-radius: 50px;
`;

class FloatTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, show: false };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.show}
          onClose={this.hideModal}
          contentStyle={{ maxWidth: "none" }}
          style={{
            background: "transparent"
          }}
        >
          <VideoPopUp youtubeId={this.props.youtubeId} />
        </Dialog>
        <MediaQuery maxWidth={900}>
          <MainContainer
            style={{
              backgroundImage: "none",
              backgroundColor: this.props.colorRef
            }}
          >
            <HeroImageContainer
              style={{ backgroundImage: `url(${this.props.imageRef})` }}
            />
            <HeroTextContainer>
              <TitleContainer>
                {this.props.title}
                <div className="ribbon ribbonSmall" />
              </TitleContainer>
              <MottoContainer>{this.props.motto}</MottoContainer>
              <ContentContainer>{this.props.content}</ContentContainer>
              <ButtonDiv style={{ visibility: this.props.buttonVisibility }}>
                <Button
                  id={`button-click-${this.props.title}-${this.props.buttonText}`}
                  style={{ color: this.props.colorRef }}
                  onClick={this.showModal}
                >
                  <div>{this.props.buttonText}</div>
                </Button>
              </ButtonDiv>
            </HeroTextContainer>
          </MainContainer>
        </MediaQuery>

        <MediaQuery minWidth={900}>
          <MainContainer
            style={{
              minHeight:
                this.state.width > 900
                  ? (this.state.width / 96) * 35 + 75
                  : "336px",
              backgroundImage: `url(${this.props.imageRef})`
            }}
          >
            <HeroImageContainer style={{ backgroundImage: "none" }} />
            <HeroTextContainer
              style={{
                backgroundImage: `url(${require("images/borders/bg-" +
                  this.props.borderColorRef +
                  ".svg")})`
              }}
            >
              <TitleContainer
                style={{
                  fontSize: this.state.width / 58
                }}
              >
                {this.props.title}
                <div class="ribbon ribbonSmall" />
              </TitleContainer>
              <MottoContainer
                style={{
                  fontSize: this.state.width / 32 + 4
                }}
              >
                {this.props.motto}
              </MottoContainer>
              <ContentContainer
                style={{
                  fontSize: this.state.width / 96 + 4
                }}
              >
                {this.props.content}
              </ContentContainer>
              <ButtonDiv
                style={{ visibility: this.props.buttonVisibility }}
                onClick={this.showModal}
              >
                <Button
                  id={`button-click-${this.props.title}-${this.props.buttonText}`}
                  style={{ color: this.props.colorRef }}
                >
                  <div>{this.props.buttonText}</div>
                </Button>
              </ButtonDiv>
            </HeroTextContainer>
          </MainContainer>
        </MediaQuery>
      </div>
    );
  }
}

export default FloatTextComponent;

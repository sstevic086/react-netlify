import React, { Component } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import VideoPopUp from "components/common/VideoPopUp";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100%;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    max-height: unset;
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 900px) {
    padding: 0;
    background-size: cover;
    background-position: center;
    min-height: 336px;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  justify-content: center;
  padding: 0 4rem;
  @media (max-width: 900px) {
    width: unset;
    padding: 1rem;
    margin: 0;
    min-height: unset;
  }
`;

const TitleContainer = styled.div`
  font-family: FSAlbert-ExtraBold;
  position: relative;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0.5rem 0.5rem;
`;

const MottoContainer = styled.div`
  font-family: FSAlbert-Bold;
  font-weight: 700;
  color: #ffffff;
  padding: 1rem 0.5rem;
`;

const ContentContainer = styled.div`
  font-family: FSAlbert-Regular;
  font-size: 1rem;
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

class RightTextHeroComponent extends Component {
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
      <MainContainer style={{ backgroundColor: this.props.colorRef }}>
        <Dialog
          open={this.state.show}
          onClose={this.hideModal}
          contentStyle={{ maxWidth: "none" }}
        >
          <VideoPopUp youtubeId={this.props.youtubeId} />
        </Dialog>
        <HeroImageContainer
          style={{
            minHeight:
              this.state.width > 900
                ? (this.state.width / 96) * 35 + 75
                : "336px",
            backgroundImage: `url(${this.props.imageRef})`
          }}
        />
        <HeroTextContainer style={{ backgroundColor: this.props.colorRef }}>
          <TitleContainer
            style={{
              fontSize: this.state.width > 900 ? this.state.width / 58 : "18px"
            }}
          >
            {this.props.title}
            <div className="ribbon ribbonSmall" />
          </TitleContainer>
          <MottoContainer
            style={{
              fontSize:
                this.state.width > 900 ? this.state.width / 32 + 4 : "32px"
            }}
          >
            {this.props.motto}
          </MottoContainer>
          <ContentContainer
            style={{
              fontSize:
                this.state.width > 900 ? this.state.width / 96 + 4 : "16.5px"
            }}
          >
            {this.props.content}
          </ContentContainer>
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
    );
  }
}

export default RightTextHeroComponent;

import React, { Component } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import VideoPopUp from "components/common/VideoPopUp";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 0 2rem;
  @media (max-width: 900px) {
    background-image: none;
    flex-direction: column-reverse;
    max-height: unset;
    padding: unset;
  }
`;

const HeroImageContainer = styled.div`
  width: 80%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    margin: 1rem 0;
    width: 95%;
    height: 336px;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 6rem 4rem 2rem;
  margin: 2rem;
  flex-shrink: 1.75;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    flex-grow: unset;
    padding: 1rem;
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  font-family: FSAlbert-ExtraBold;
  position: relative;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0.5rem 0.5rem;
  font-size: 18px;
`;

const MottoContainer = styled.div`
  font-family: FSAlbert-Bold;
  font-weight: 700;
  color: #ffffff;
  padding: 1rem 0.5rem;
`;

const ContentContainer = styled.div`
  font-family: FSAlbert-Regular;
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

class FloatImageComponent extends Component {
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
          contentStyle={{ maxWidth: "none", margin: 0 }}
        >
          <VideoPopUp youtubeId={this.props.youtubeId} />
        </Dialog>
        <MainContainer
          style={{
            minHeight:
              this.state.width > 900
                ? (this.state.width / 96) * 35 + 75
                : "336px",
            backgroundColor: this.props.colorRef
          }}
        >
          <HeroTextContainer>
            <TitleContainer
              style={{
                fontSize:
                  this.state.width > 900 ? this.state.width / 58 : "18px"
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

          <HeroImageContainer
            style={{
              minHeight:
                this.state.width > 900 ? (this.state.width / 96) * 35 : "336px",
              backgroundImage: `url(${this.props.imageRef})`
            }}
          />
        </MainContainer>
      </div>
    );
  }
}

export default FloatImageComponent;

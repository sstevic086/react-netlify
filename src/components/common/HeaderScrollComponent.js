import React, { Component } from "react";
import styled from "styled-components";
// import Headroom from "react-headroom";

const MainContainer = styled.div`
  font-family: FSAlbert-Regular;
  display: flex;
  top: 0;
  align-items: center;

  justify-content: center;

  margin: 0 auto;
  font-size: 13px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 50px;

  @media (max-width: 900px) {
    min-height: 60px;
  }
  @media (max-width: 700px) {
    justify-content: unset;
  }
`;

const TitleConatiner = styled.div`
  padding: 0 20px;

  color: #666666;
  white-space: nowrap;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  cursor: pointer;
  color: white;
  :hover {
    color: grey;
  }
  white-space: nowrap;
  padding: 0 20px;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

const Headroom = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  right: 0px;
  z-index: 1;
`;

class HeaderScrollComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
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
  scrollToMyRef = x => {
    let offsetValue = 0;
    this.state.width < 900 ? (offsetValue = 110) : (offsetValue = 100);
    let count = x.current.offsetTop - offsetValue;

    window.scrollTo({ top: count, left: 0, behavior: "smooth" });
  };

  render() {
    return (
      <Headroom disableInlineStyles>
        <div
          style={{
            background: `#343a40`
          }}
        >
          <MainContainer>
            <TitleConatiner>{this.props.title}</TitleConatiner>
            {this.props.contents.map((content, key) => (
              <ContentContainer
                key={content.id}
                onClick={() => this.scrollToMyRef(content.ref)}
              >
                {content.contentName}
              </ContentContainer>
            ))}
          </MainContainer>
        </div>
      </Headroom>
    );
  }
}

export default HeaderScrollComponent;

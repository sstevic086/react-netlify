import React, { Component } from "react";
import styled from "styled-components";

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const HeroHeader = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  padding: 1rem;
`;

const ImageTile = styled.img`
  height: auto;
  width: 100%;
  align-items: center;
  display: block;
  margin: -0.1rem 0;
`;

const HeroContent = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 970px) {
    font-size: 16px;
  }
`;

const List = styled.li`
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  @media (max-width: 500px) {
    padding: 1rem 0;
  }
`;

const Number = styled.div`
  width: 40px;

  min-width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 100%;
  background: #ffffff;
  color: #ee142a;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 970px) {
    width: 25px;
    height: 25px;
    min-height: 25px;
    max-height: 25px;

    min-width: 25px;
    max-width: 25px;
  }
`;

const NumberOne = styled.div`
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;

  min-height: 40px;
  max-height: 40px;
  border-radius: 100%;
  background: #ffffff;
  color: #ee142a;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 970px) {
    width: 25px;
    min-width: 25px;
    max-width: 25px;
    height: 25px;

    min-height: 25px;
    max-height: 25px;
  }
`;

class TileList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ImageTile src={require("images/steps-top-2x.png")} />
        <div
          style={{
            background: "#ed1b2e",
            width: "100%"
          }}
        >
          <HeroTextContainer>
            <HeroHeader>{this.props.Title}</HeroHeader>
            <HeroContent>
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    paddingInlineStart: "10px"
                  }}
                >
                  <List>
                    <NumberOne>
                      <div>1</div>
                    </NumberOne>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap"
                      }}
                    >
                      {this.props.Content1}
                    </div>
                  </List>
                  <List>
                    <Number>2</Number>
                    {this.props.Content2}
                  </List>
                  <List>
                    <Number>3</Number>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flex: 1
                      }}
                    >
                      {this.props.Content3}
                    </div>
                  </List>
                </ul>
              </div>
            </HeroContent>
          </HeroTextContainer>
        </div>
        <ImageTile src={require("images/steps-bottom-2x.png")} />
      </div>
    );
  }
}
export default TileList;

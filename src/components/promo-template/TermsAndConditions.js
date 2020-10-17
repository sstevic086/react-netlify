import React, { Component } from "react";
import styled from "styled-components";

const TermsAndConditions = styled.div`
  color: #687379;
  font-size: 16px;
  white-space: pre-wrap;
  padding: 0.5rem 0;
`;

class Terms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TermsAndConditions>
        <div>
          <b>
            <span style={{ fontSize: "15px" }}>{this.props.Star} </span>
            {this.props.MiniHeader}
          </b>
        </div>
        <div>
          <ol>{this.props.ListItem}</ol>
        </div>
      </TermsAndConditions>
    );
  }
}
export default Terms;

import React, { Component } from "react";
import styled from "styled-components";

import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";

const LearnMore = styled.div`
  color: #ed1b2e;
  font-size: 20px;
  fon-weight: 400;
  white-space: pre-wrap;
  text-align: left;
  cursor: pointer;
`;
class FindOutMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LearnMore>Find Out More</LearnMore>;
  }
}
export default withRouter(FindOutMore);

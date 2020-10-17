import React, { Component } from "react";
import styled from "styled-components";

class VideoPopUp extends Component {
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
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: 0,
            color: "white"
          }}
        >
          <i className="fa fa-times fa-2x" />
        </div>
        <div
          style={{
            width: this.state.width / 1.35,
            maxWidth: "100vh",
            display: "flex",
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,

            background: "#000",
            height: 0
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            allowfullscreen="true"
            src={`https://www.youtube.com/embed/${this.props.youtubeId}`}
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}

export default VideoPopUp;

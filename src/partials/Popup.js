import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import "react-accessible-accordion/dist/fancy-example.css";

import posed from "react-pose";
import { injectIntl } from "react-intl";

import {
  Link,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";

const Dropdown = styled(
  posed.div({
    closed: {
      height: 0,
      opacity: 0,
      display: "none",
      applyAtEnd: {
        display: "none"
      }
    },
    open: {
      height: "100vh",
      opacity: 1,
      applyAtStart: {
        display: "block"
      }
    }
  })
)`
  background-color: rgba(255, 255, 255, 0.95);
  bottom: 0px;
  height: 100vh;
  overflow: scroll;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 50px;
  z-index: 99;
  transition-duration: 0.2s;
  transition-property: -ms-transform, -webkit-transform, transform;
  transition-timing-function: ease-out;
  transform: translateY(0px);
`;

const Expanded = withStyles({
  root: {
    boxShadow: "none",
    position: "unset"
  }
})(ExpansionPanel);

const MenuItemStyled = withStyles({
  root: {
    padding: "0 24px"
  }
})(MenuItem);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "#fff"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  hoverStyle: {
    "&:hover": {
      background: "#ebebeb"
    }
  }
}));

const Popup = props => {
  const [dropdown, setDropdown] = React.useState(false);

  function handleClose(e) {
    e.preventDefault();

    if (dropdown) {
      setDropdown(false);
    }
  }

  function handleOpen(e) {
    setDropdown(true);
  }
  const classes = useStyles();

  function PersonalHealthAssistant() {
    props.history.push(`/personal-health-assistant`);
    setDropdown(false);
  }
  function Challenges() {
    props.history.push(`/challenge-yourself`);
    setDropdown(false);
  }
  function Notifications() {
    props.history.push(`/alerts-and-notifications`);
    setDropdown(false);
  }

  // function Events() {
  //   props.history.push("/events");
  //   setDropdown(false);
  // }

  const isHome =
    window.location.pathname === "/" || window.location.pathname === "/";

  const Home = () => {
    setDropdown(false);
    if (!isHome) {
      window.location = `#home`;
    } else {
      props.history.push(`#home`);

      const element = document.getElementById("home");
      setDropdown(false);

      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - 45 : 0
      });
    }
  };

  function Benefits() {
    setDropdown(false);
    if (!isHome) {
      window.location = `#benefits`;
    } else {
      props.history.push(`#benefits`);

      const element = document.getElementById("benefits");
      setDropdown(false);

      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - 45 : 0
      });
    }
  }

  return (
    <div>
      {dropdown ? (
        <div
          style={{
            cursor: "pointer"
          }}
        >
          <i className="fas fa-bars " />
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer"
          }}
        >
          <i className="fas fa-bars " onClick={handleOpen} />
        </div>
      )}
      <Dropdown initialPose="closed" pose={dropdown ? "open" : "closed"}>
        {dropdown && (
          <ClickAwayListener onClickAway={handleClose}>
            <div className={classes.root}>
              <MenuItemStyled onClick={Home}>
                {props.intl.formatMessage({
                  id: "header.home"
                })}
              </MenuItemStyled>
              <Expanded>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.hoverStyle}
                >
                  <Typography className={classes.heading}>
                    {props.intl.formatMessage({
                      id: "header.features"
                    })}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelSummary>
                  <div>
                    <MenuItem onClick={PersonalHealthAssistant}>
                      {props.intl.formatMessage({
                        id: "header.features.personal-assistant"
                      })}
                    </MenuItem>
                    <MenuItem onClick={Challenges}>
                      {props.intl.formatMessage({
                        id: "header.features.challenges"
                      })}
                    </MenuItem>
                    <MenuItem onClick={Notifications}>
                      {props.intl.formatMessage({
                        id: "header.features.alerts"
                      })}
                    </MenuItem>
                  </div>
                </ExpansionPanelSummary>
              </Expanded>
              <MenuItemStyled onClick={Benefits}>
                {props.intl.formatMessage({
                  id: "header.benefits"
                })}
              </MenuItemStyled>
              {/* <MenuItemStyled onClick={Events}>Events & Promotions</MenuItemStyled> */}
              <Expanded>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.hoverStyle}
                >
                  <Typography className={classes.heading}>
                    {props.intl.formatMessage({
                      id: "header.language"
                    })}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelSummary>
                  <div>
                    <MenuItem
                      onClick={() => {
                        setDropdown(false);

                        props.setLanguage("en");
                      }}
                    >
                      English
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setDropdown(false);

                        props.setLanguage("my");
                      }}
                    >
                      Bahasa Malaysia
                    </MenuItem>
                  </div>
                </ExpansionPanelSummary>
              </Expanded>
            </div>
          </ClickAwayListener>
        )}
      </Dropdown>
    </div>
  );
};

export default withRouter(injectIntl(Popup));

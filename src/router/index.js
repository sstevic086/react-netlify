import React, { Component } from "react";
import Header from "partials/Header";
import Footer from "partials/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import Landing from "containers/home/Landing";
import Terms from "containers/terms/Terms";
import Privacy from "containers/terms/Privacy";

import ChallengeYourself from "containers/lets_get_personal/ChallengeYourself";
import PersonalHealthAssistant from "containers/lets_get_personal/PersonalHealthAssistant";
import AlertsAndNotification from "containers/lets_get_personal/AlertsAndNotification";

import EventsPage from "containers/events/EventsPage";
import EventsPromoRoutes from "./events-promo";
import EventsPageBM from "containers/events/EventsPageBM";
import Popup from "components/home/Popup";
import queryString from "query-string";

const LanguageLoaderComponent = ({ language, history }) => {
  const qs = queryString.parse(window.location.search);

  React.useEffect(() => {
    if (!qs.utm_language) {
      const prev =
        window.localStorage && window.localStorage.getItem("language");

      if (prev) {
        qs.utm_language = prev;

        const qstring = queryString.stringify(qs);

        history.replace({
          // pathname: window.location.pathname,
          search: qstring
        });
      } else {
        qs.utm_language = language;

        const qstring = queryString.stringify(qs);

        history.replace({
          // pathname: window.location.pathname,
          search: qstring
        });
        // window.location.reload();
      }
    }
  }, [qs]);

  return <div />;
};

const LanguageLoader = withRouter(LanguageLoaderComponent);

const Routes = props => {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router basename={`my`}>
      <div>
        <Route path="/" component={LanguageLoader} language={props.language} />
        <Header setLanguage={props.setLanguage} language={props.language} />
        <Popup />

        <div style={{ marginTop: 50 }}>
          <Switch>
            <Route exact path={`/`} component={Landing} />
            <Route path={`/terms-conditions`} component={Terms} />
            <Route path={`/privacy-policy`} component={Privacy} />
            <Route
              path={`/challenge-yourself`}
              component={ChallengeYourself}
            />
            <Route
              path={`/personal-health-assistant`}
              component={PersonalHealthAssistant}
            />
            <Route
              path={`/alerts-and-notifications`}
              component={AlertsAndNotification}
            />
            <Route path={`/events`} component={EventsPage} />
            <Route path={`/acara`} component={EventsPageBM} />
            <EventsPromoRoutes />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default Routes;

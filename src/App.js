import React from "react";
import Routes from "./router/index";

import { IntlProvider, addLocaleData } from "react-intl";

import messages_my from "localisations/my.json";
import messages_en from "localisations/en.json";

import en from "react-intl/locale-data/en";
import my from "react-intl/locale-data/my";

import queryString from "query-string";

const messages = {
  my: messages_my,
  en: messages_en
};
addLocaleData([...en, ...my]);

function App() {
  const init = window.localStorage && window.localStorage.getItem("language");
  const initialState = () => init || "en";

  const [language, setLanguage] = React.useState(initialState);

  const qs = queryString.parse(window.location.search);

  React.useEffect(() => {
    const prev = window.localStorage.getItem("language");

    if (prev) {
      if (language !== prev) {
        (async function() {
          await window.localStorage.setItem("language", language);

          qs.utm_language = language;

          const qstring = queryString.stringify(qs);

          window.location.replace(`${window.location.pathname}?${qstring}`);
          // window.location.reload();
        })();
      }
    } else {
      window.localStorage.setItem("language", language);

      qs.utm_language = language;

      const qstring = queryString.stringify(qs);

      window.location.replace(`${window.location.pathname}?${qstring}`);
      // window.location.reload();
    }
    console.log("Developed by Awan Ventures, at https://awan.ventures");
  }, [language]);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Routes setLanguage={setLanguage} language={language} />
    </IntlProvider>
  );
}

export default App;

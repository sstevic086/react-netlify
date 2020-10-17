import React from "react";

import { Route } from "react-router-dom";

import PromotionTemplatePage from "containers/template/event-template/TreatFromUs";

import PromotionTemplatePageBM from "containers/template/event-template/TreatFromUsBM";

import OctChallenge from "containers/template/oct-challenge/OctChallenge";

import OctChallengeBM from "containers/template/oct-challenge/OctChallengeBM";
import Feb20Challenge from "../../containers/template/feb20-challenge/Feb20Challenge";
import Feb20ChallengeBM from "../../containers/template/feb20-challenge/Feb20ChallengeBM";

const Routes = props => {
  return (
    <>
      <Route
        path={`/p/enjoy-a-treat-from-us-today`}
        component={PromotionTemplatePage}
      />
      <Route
        path={`/p/kami-belanja-anda-hari-ini`}
        component={PromotionTemplatePageBM}
      />
      <Route
        path={`/p/bergerak-melawan-kanser-bulan-oktober-ini`}
        component={OctChallengeBM}
      />
      <Route
        path={`/p/step-up-for-cancer-this-october`}
        component={OctChallenge}
      />
      <Route path={`/p/new-year-new-you`} component={Feb20Challenge} />
      <Route path={`/p/tahun-baru-dini-baru`} component={Feb20ChallengeBM} />
    </>
  );
};
export default Routes;

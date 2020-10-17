import React, { Component } from "react";
import styled from "styled-components";
import MainHero from "components/promo-template/MainHero";
import DownloadNow from "components/common/DownloadNow";
import Terms from "../../../components/promo-template/TermsAndConditions";
import { withRouter } from "react-router-dom";
import TileList from "components/promo-template/TileList";
import { injectIntl } from "react-intl";

const PageComponent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
`;

const PageContent = styled.div`
  width: 70%;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const HeroContent = styled.div`
  color: #687379;
  font-size: 18px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 2rem 0;
`;

class PromotionTemplatePageBM extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.intl.locale === "en")
      this.props.history.push("/p/enjoy-a-treat-from-us-today");
  }
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <MainHero
              HeroTile={require("images/assets/starbucksreward-bm-2x.png")}
              Header={"Jom! Kami belanja anda hari ini*"}
              Desc={
                "Hari yang anda tak perlu jaga makan jadi lebih seronok!\n \nMuat turun Pulse by Prudential dan nikmati diskaun 10% untuk sajian kegemaran anda di Starbucks."
              }
              alt="Pulse memberikan diskon 10% di Starbucks"
            />
            <TileList
              Title="Bagaimana nak tebus kupon anda?"
              Content1={
                "Muat turun Pulse by Prudential di Google Play atau App Store"
              }
              Content2={"Daftar diri anda dalam aplikasi"}
              Content3={
                "Nikmati sajian anda di mana-mana cawangan Starbucks dalam Malaysia"
              }
            />
            <HeroContent>
              Jadi, jom berkenalan!
              <div
                style={{
                  padding: "0.5rem 0"
                }}
              >
                Muat turun Pulse by Prudential sekarang.
              </div>
            </HeroContent>
            <Terms
              Star="*"
              MiniHeader="Terma dan Syarat"
              ListItem={
                <div>
                  <li>
                    Diskaun 10% untuk makanan & minuman bagi menu a la carte
                    sahaja.
                  </li>
                  <li>
                    Tidak sah dengan promosi, diskaun atau hidangan set lain.
                  </li>
                  <li>
                    Diskaun tidak boleh digunakan untuk cenderahati Starbucks,
                    makanan bungkus, minuman berbotol dan biji kopi.
                  </li>
                  <li>Tidak sah untuk Starbucks Reserve Bar.</li>
                  <li>Sah sehingga 31 Ogos 2020.</li>
                </div>
              }
            />
          </PageContent>
        </PageComponent>
        <DownloadNow
          titleText={"Bersama kita boleh berjaya untuk menjadi sihat."}
        />
      </div>
    );
  }
}

export default injectIntl(withRouter(PromotionTemplatePageBM));

import React, { Component } from "react";
import styled from "styled-components";
import MainHero from "components/promo-template/MainHero";
import DownloadNow from "components/common/DownloadNow";
import Terms from "../../../components/promo-template/TermsAndConditions";
import TileList from "components/promo-template/TileList";
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";

const PageComponent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  padding: 1rem 0;
`;

const TextHead = styled.div`
  font-size: 30px;
  color: #ee142a;
`;

const TextContent = styled.div`
  color: #687379;
  font-size: 20px;
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
  padding: 0.5rem 0;
`;

class OctChallengeBM extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.intl.locale === "en")
      this.props.history.push("/p/step-up-for-cancer-this-october");
  }
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <MainHero
              HeroTile={require("images/assets/oct_challenge-bm.png")}
              Header={"Bergerak melawan kanser bulan Oktober ini."}
              Content={"Tempoh Kempen: 21 Oktober - 19 November 2019"}
              Desc={
                "Melangkah jauh demi kesihatan anda dan orang lain! Berjalan, berlari dan gerakkan badan anda sambil beramal. \n\nPulse by Prudential akan menderma RM10,000 kepada Persatuan Kebangsaan Kanser Malaysia apabila kita berjaya mencecah jumlah terkumpul sebanyak 150 juta langkah! Ini bermakna anda juga boleh memberi sumbangan untuk tujuan yang baik ini dengan setiap langkah anda. \n\nTapi bukan itu sahaja."
              }
              alt="Bergerak melawan kanser dan nikmati ganjaran dari Pulse"
            />
            <HeroContent>
              10 individual dengan langkah terbanyak akan menerima{" "}
              <b>RM100 kredit Boost. </b>
            </HeroContent>
            <TileList
              Title="Macam mana caranya?"
              Content1={"Sertai cabaran bulan ini di Pulse by Prudential"}
              Content2={"Pasangkan peranti penjejak anda"}
              Content3={"Berjalan, berlari dan bergerak sebanyak mungkin"}
            />
            <TextContainer>
              <TextContent>
                Ajak rakan-rakan anda untuk sertai cabaran ini dan bersama
                membantu insan lain sambil melangkah ke arah kesihatan yang
                lebih baik.
              </TextContent>
            </TextContainer>
            <TextHead
              style={{
                color: "#687379",
                padding: "1rem 0"
              }}
            >
              Sedia? Ayuh mula!
            </TextHead>

            <Terms
              MiniHeader="Terma & Syarat"
              ListItem={
                <div>
                  <li>
                    Cabaran ini ditawarkan dengan budi bicara Pulse. Dengan
                    menyertai cabaran ini, anda bersetuju yang anda telah baca,
                    faham dan bersetuju untuk terikat dengan terma dan syarat
                    cabaran ini dan sebarang perubahan dan modifikasi Pulse akan
                    lakukan pada cabaran tanpa notis awal.
                  </li>
                  <li>
                    Pulse akan memiliki budi bicara mutlak dalam semua perkara
                    dan pertikaian berkenaan dengan cabaran ini termasuklah
                    menentukan pemenang yang akan dipilih berdasarkan data yang
                    diambil daripada sistem pengagretan data kesihatan Pulse.
                    Sebarang rayuan tidak akan dilayan.
                  </li>
                  <li>
                    Setiap penyertaan individu layak untuk memenangi maksima
                    tiga (3) kali berturut-turut untuk semua Cabaran dianjurkan
                    Pulse.
                  </li>
                  <li>
                    Sepuluh (10) penyertaan individu dengan nombor langkah
                    tertinggi untuk cabaran Bergerak Melawan Kanser akan
                    menerima RM100 baucar Boost (“Pemenang Baucar Boost”).
                    <div>
                      <ul>
                        <li>
                          Setiap Pemenang Baucar Boost layak untuk hanya satu
                          (1) Baucar Boost setiap cabaran Bergerak Melawan
                          Kanser.
                        </li>
                        <li>
                          RM100 Baucar Boost hanya boleh ditebus melalui
                          aplikasi Boost.
                        </li>
                        <li>
                          Setiap RM100 Baucar Boost yang ditebus akan bersamaan
                          dengan RM100 kredit Boost.
                        </li>
                        <li>
                          Pemenang Baucar Boost boleh menebus RM100 Baucar Boost
                          dengan tekan pada seksyen “Kod Penebusan” dalam
                          halaman profil (butang terakhir) pada aplikasi Boost.
                        </li>
                        <li>
                          Setiap akaun Boost akan dibenarkan untuk menebus
                          maksima satu (1) RM100 Baucar Boost sahaja.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    RM100 Baucar Boost tidak boleh dipindahkan, ditukar dan
                    ditebus untuk wang tunai, kredit atau sama sepertinya.
                  </li>
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

export default injectIntl(withRouter(OctChallengeBM));

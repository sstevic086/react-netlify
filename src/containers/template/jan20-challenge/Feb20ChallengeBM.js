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

class Feb20ChallengeBM extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.intl.locale === "en")
      this.props.history.push("/p/new-year-new-you");
  }
  render() {
    return (
      <div>
        <PageComponent>
          <PageContent>
            <MainHero
              HeroTile={require("images/assets/1200x730Malay-01.png")}
              Header={"Jangan tunggu lagi. Jom aktifkan diri!"}
              Content={"Tempoh Kempen: 1 – 29 Februari 2020"}
              Desc={
                "Lebih dari lima puluh peratus daripada mereka yang membuat azam tahun baru berputus asa selepas sebulan berlalu. Jangan patah semangat - cuba cabaran Februari dan lihat berapa banyak langkah yang anda boleh lakukan bulan ini!"
              }
              alt={"Jom bersenam sekarang! - Pulse by Prudential"}
            />
            <HeroContent>
              Ganjaran istimewa menanti mereka yang serius untuk hidup lebih
              sihat tahun baru ini:
              <ul>
                <li>
                  Peranti Fitbit untuk 3 peserta dengan jumlah langkah yang
                  terbanyak
                </li>
                <li>
                  Kredit Boost berjumlah RM50 untuk tempat ke-4 hingga ke-50
                </li>
              </ul>
            </HeroContent>
            <TileList
              Title="Bagaimana cara untuk menang?"
              Content1={"Sertai cabaran bulan ini di Pulse by Prudential"}
              Content2={"Pasangkan peranti penjejak anda"}
              Content3={"Berjalan, berlari dan bergerak sebanyak mungkin"}
            />
            <TextContainer>
              <TextContent>
                Ajak keluarga dan rakan-rakan anda untuk menyertai anda dan
                bersaing dengan mereka di papan pendahulu kami. Jangan
                sia-siakan azam tahun baru anda dan tunjukkan siapa bos bulan
                Februari ini.
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
                    Cabaran Februari 2020: Sinar Baru Anda (“Cabaran”) ini
                    ditawarkan mengikut budi bicara Pulse by Prudential
                    (“Pulse”). Dengan menyertai Cabaran ini, anda bersetuju
                    bahawa anda telah membaca, memahami dan bersetuju untuk
                    terikat dengan terma dan syarat dalam Cabaran ini dan
                    sebarang perubahan atau pengubahsuaian oleh Pulse untuk
                    Cabaran ini tanpa sebarang notis terlebih dahulu.
                  </li>
                  <li>
                    Pulse mempunyai budi bicara mutlak berkenaan dengan semua
                    perkara dan pertikaian mengenai Cabaran ini termasuk
                    menentukan pemenang berdasarkan data yang diambil dari
                    sistem data kesihatan terkumpul Pulse. Sebarang rayuan tidak
                    akan dilayan.
                  </li>
                  <li>
                    Tiga (3) peserta individu dengan jumlah langkah terbanyak
                    untuk Cabaran ini, setiap seorang akan menerima Fitbit
                    Inspire HR Black.
                  </li>
                  <li>
                    Peserta individu tempat keempat (ke-4) hingga kelima puluh
                    (ke-50) untuk langkah terbanyak untuk Cabaran ini, setiap
                    seorang akan menerima Baucar Boost RM 50 (&quot;Pemenang
                    Baucar Boost&quot;).
                    <div>
                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li>
                          Setiap Pemenang Baucar Boost hanya layak mendapat satu
                          (1) Baucar Boost RM50.
                        </li>
                        <li>
                          Baucar Boost RM50 hanya boleh ditebus melalui aplikasi
                          Boost.
                        </li>
                        <li>
                          Setiap RM50 Baucar Boost yang ditebus bersamaan dengan
                          RM50 kredit Boost dalam aplikasi Boost.
                        </li>
                        <li>
                          Pemenang Baucar Boost boleh menebus Baucer Boost RM50
                          dengan klik bahagian &#39;Kod Penebusan&#39; di
                          halaman Profil (tab terakhir) dalam aplikasi Boost.
                        </li>
                        <li>
                          Setiap akaun Boost akan dibenarkan untuk menebus
                          maksimum sepuluh (10) RM50 Baucar Boost sahaja.
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    Baucar Boost RM50 dan Fitbit Inspire HR Black tidak boleh
                    dipindah milik, tidak boleh ditukar dan tidak boleh ditebus
                    dengan wang tunai, kredit atau yang sama dengannya.
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

export default injectIntl(withRouter(Feb20ChallengeBM));

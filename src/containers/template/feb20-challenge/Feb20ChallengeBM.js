import React, { Component } from "react";
import styled from "styled-components";
// import MainHero from "components/promo-template/MainHero";
import DownloadNow from "components/common/DownloadNow";
import Terms from "../../../components/promo-template/TermsAndConditions";
import TileList from "components/promo-template/TileList";
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";

const ImageContainer = styled.div`
  padding: 1rem 0;
`;
const ImageTile = styled.img`
  height: auto;
  width: 100%;
  align-items: center;
  border-radius: 5px;
`;

const HeroHeader = styled.div`
  color: #687379;
  font-size: 48px;
  font-weight: 600;
  padding: 1rem 0;
  text-align: left;
  @media(max-width: 500px){
    font-size: 35px;
  }
`;

const HeroHeaderContent = styled.div`
  color: #687379;
  font-size: 18px;
  fon-weight: 400;
  white-space: pre-wrap;
  padding: 0.5rem 0;
  
`;

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
            {/* <MainHero
              HeroTile={require("images/assets/1200-x-730-BM.png")}
              Header={"Mahu turunkan berat badan tapi tak tahu mana nak mula? Cabaran ini sesuai untuk anda."}
              Content={"Tempoh Kempen: 1 – 31 Mac 2020"}
              Desc={
                "Berjalan. Itulah cara pantas dan efektif yang boleh dilakukan di mana saja. Ia membantu anda turunkan berat badan, hilangkan stres, kurangkan tekanan darah serta kelebihan kesihatan yang lain. Setiap hujung minggu, untuk sebulan, cubalah berjalan, sama ada sendiri, dengan kawan atau keluarga, selama 40 min (anggaran 5,000 langkah). Lengkapkan cabaran ini bermakna anda berjalan kira-kira 5km setiap hujung minggu. Lebih banyak anda berjalan, lagi banyak kalori dapat dibakar!"
              }
              alt={"Jom bersenam sekarang! - Pulse by Prudential"}
            /> */}
            <ImageContainer>
              <ImageTile src={
                require("images/assets/1200-x-730-BM.png")
              }/>
            </ImageContainer>
            <HeroHeaderContent>
            Tempoh Kempen: 9 Mac - 8 April, 2020
            </HeroHeaderContent>
              <HeroHeader style={{
                lineHeight: "90%"
              }}>
              Mahu turunkan berat badan tapi tak tahu mana nak mula? Cabaran ini sesuai untuk anda.
              </HeroHeader>
              <HeroHeaderContent>
              Berjalan. Itulah cara pantas dan efektif yang boleh dilakukan di mana saja. Ia membantu anda
turunkan berat badan, hilangkan stres, kurangkan tekanan darah serta kelebihan kesihatan yang
lain. Setiap hujung minggu, untuk sebulan, cubalah berjalan, sama ada sendiri, dengan kawan
atau keluarga, selama 40 min (anggaran 5,000 langkah). Lengkapkan cabaran ini bermakna
anda berjalan kira-kira 5km setiap hujung minggu. Lebih banyak anda berjalan, lagi banyak
kalori dapat dibakar!
              </HeroHeaderContent>
            <HeroContent>
            Ganjaran istimewa menanti mereka yang serius hendak mencapai matlamat kesihatan:
              <ul>
                <li>
                Peserta 50 teratas yang mencapai langkah terbanyak akan membawa pulang RM50
Kredit Boost
                </li>
                {/* <li>
                  Kredit Boost berjumlah RM50 untuk tempat ke-4 hingga ke-50
                </li> */}
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
              Ajak keluarga dan rakan-rakan untuk menyertai anda dan bersaing dengan mereka di papan
pendahulu kami.
              </TextContent>
            </TextContainer>
            {/* <TextHead
              style={{
                color: "#687379",
                padding: "1rem 0"
              }}
            >
              Sedia? Ayuh mula!
            </TextHead> */}

            <Terms
              MiniHeader="Terma & Syarat"
              ListItem={
                <div>
                  <li>
                  Cabaran Mac 2020: Berjalan Mengurangkan Berat Badan (“Cabaran”) ini ditawarkan
mengikut budi bicara Pulse by Prudential (“Pulse”). Dengan menyertai Cabaran ini, anda
bersetuju bahawa anda telah membaca, memahami dan bersetuju untuk terikat dengan
terma dan syarat dalam Cabaran ini dan sebarang perubahan atau pengubahsuaian oleh
Pulse untuk Cabaran ini tanpa sebarang notis terlebih dahulu.
                  </li>
                  <li>
                  Pulse mempunyai budi bicara mutlak berkenaan dengan semua perkara dan pertikaian
mengenai Cabaran ini termasuk menentukan pemenang berdasarkan data yang diambil
dari sistem data kesihatan terkumpul Pulse. Sebarang rayuan tidak akan dilayan.
                  </li>
                  <li>
                  Lima puluh (50) peserta individu dengan jumlah langkah tertinggi untuk Cabaran ini
akan menerima Kredit Boost RM50 (&quot;Pemenang Kredit Boost&quot;) setiap seorang.
                    <div>
                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li>
                        Setiap Pemenang Kredit Boost hanya layak mendapat Kredit Boost RM50 untuk
setiap Cabaran.
                        </li>
                        <li>
                        Pemenang Kredit Boost akan menerima e-mel yang mengandungi kod
penebusan Kredit Boost RM50.
                        </li>
                        <li>
                        Setiap penyertaan individu layak untuk memenangi maksima tiga (3) kali berturut-turut untuk semua Cabaran dianjurkan Pulse.
                        </li>
                        <li>
                        Kredit Boost RM50 hanya boleh ditebus melalui aplikasi Boost dengan menekan
bahagian ‘Kod Penebusan’ di halaman Profil (tab terakhir) aplikasi Boost dan
masukkan kod penebusan yang telah di e-mel kepada Pemenang Kredit Boost.
Setelah ditebus, Kredit Boost RM50 akan tertera di aplikasi Boost.
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                  Kredit Boost RM50 tidak boleh dipindah milik, tidak boleh ditukar dan tidak boleh ditebus
untuk wang tunai, kredit atau yang sama dengannya.
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

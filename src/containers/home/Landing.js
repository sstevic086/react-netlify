import React, { Component } from 'react';
import LandingHero from 'components/home/LandingHero';
import LetsGetPersonal from 'components/home/LetsGetPeronal';
import WhatForYou from 'components/home/WhatForYou';
import WhatsHappening from 'components/home/WhatsHappening';
import DownloadNow from 'components/common/DownloadNow';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

// Combining all components of the landing page into one page

const Landing = props => {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="pulse, prudential pulse,pru pulse,pulse app, prudential pulse app, prudential health app, install pulse app, install prudential pulse app, install pru pulse app, install health app, pulse app features, prudential pulse app features, pru pulse app features, health solutions made available on single platform, features are powered by the latest AI technology, offers medical insights and information that are unique to your health condition, available to both prudential and non-prudential customers, bersenam, diet, diet plan, emergencies medical, fitness, fitness tips and facts, gaya hidup sihat, gaya sihat, health, health and fitness, health app, health insurance, health tips and facts , healthcare, hidup sihat, jom kurus, jom sihat, kesihatan, medical insurance, nutrisi, nutrisi and pemakanan, obesiti, senaman, sihat, sukan dan kesihatan, wellness, workout and fitness, aplikasi prudential, aplikasi android prudential, aplikasi ios pridential, aplikasi pluse, aplikasi prudential, apikasi prudential pulse, aplikasi prudential kesihatan, app prudential kesihatan, sihat prudential, cergas prudential, segar prudential, afiat prudential, aktif prudential, kesihatan prudential, kecergasan prudential, sihat pru, cergas pru, segar pru, afiat pru, aktif pru, kesihatan pru, kecergasan pru, sihat aplikasi, cergas aplikasi, afiat aplikasi, aktif aplikasi, kesihatan aplikasi, kecergasan aplikasi, sihat pulse, cergas pulse, segar pulse, afiat pulse, afiat pulse, aktif pulse, kesihatan pulse, kecergasan pulse, sihat app, cergas app, segar app, afiat app, aktif app, kesihatan app, kecergasan app, muat turun prudential, muat turunprudential app, muat turun prudential aplikasi, muat turun pru, muat turun pru app, muat turun pru aplikasi, sihat muat turn, cergas muat turn, segar muat turn, afiat muat turn, aktif muat turn, imbas sihat, imbas sihat aplikasi, imbas sihat app, imbas kesihatan, imbaskecergasan, imbas penyakit, semak sihat, semak sihat aplikasi, semak sihat app, semah penyakit, sihat pru, cergas pru, segar pru, afiat pru, aktif pru"
        />
        <meta
          name="description"
          content="health solutions made available on single platform, features are powered by the latest AI technology, offers medical insights and information that are unique to your health condition, available to both prudential and non-prudential customers"
        />
      </Helmet>
      <LandingHero />
      <LetsGetPersonal />
      <WhatForYou />

      {/* <WhatsHappening
        whatsHappeningContents={[
          {
            subtitle: props.intl.formatMessage({
              id: "landing.whatshappening.subtitle4"
            }),
            imgSrc:
              props.intl.locale === "en"
                ? require("images/assets/1200-x-730-ENG.png")
                : require("images/assets/1200-x-730-BM.png"),
            alt: props.intl.formatMessage({
              id: "whatshappening.alt.jan20"
            }),
            redirectTo: props.intl.formatMessage({
              id: "jan20.1.link"
            })
          },
          {
            subtitle: props.intl.formatMessage({
              id: "landing.whatshappening.subtitle2"
            }),
            imgSrc:
              props.intl.locale === "en"
                ? require("images/assets/starbucksreward-2x.png")
                : require("images/assets/starbucksreward-bm-2x.png"),
            alt: props.intl.formatMessage({
              id: "whatshappening.alt.starbucks"
            }),
            redirectTo: props.intl.formatMessage({
              id: "promos.1.link"
            })
          }
        ]}
      /> */}
      <DownloadNow
        titleText={props.intl.formatMessage({
          id: 'common.downloadnow.landing',
        })}
      />
    </div>
  );
};

export default injectIntl(Landing);

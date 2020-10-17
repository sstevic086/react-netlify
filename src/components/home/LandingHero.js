import React, { Component } from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { injectIntl } from 'react-intl';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 640px;
  @media (max-width: 900px) {
    min-height: 400px;
  }
`;
const HeroContainerImage = styled.img`
  display: flex;
  align-items: center;
  min-height: 640px;
  @media (max-width: 900px) {
    min-height: 400px;
  }
`;
const HeroSplit = styled.div`
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    padding: 1rem 1rem 12rem;
  }
`;

const HeroText = styled.div`
  font-family: FSAlbert-Bold;
  font-size: 65px;
  color: #ffffff;
  padding: 0 2rem;
  /*text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);*/
  @media (max-width: 900px) {
    padding: unset;
    text-align: left;
  }
`;

const HeroTitle = styled.div`
  margin-left: 1rem;
  font-weight: 700;
  @media (max-width: 900px) {
    position: unset;
    margin-left: 0.5rem;
    font-size: 28px;
  }
`;

const HeroUnderlineText = styled.div`
  font-family: FSAlbert-Bold;
  font-weight: 600;
  width: fit-content;
  margin-left: 1rem;
  position: relative;
  display: table;
  @media (max-width: 900px) {
    margin-left: 0.5rem;
    max-width: 100%;
    font-size: 24px;
    text-align: left;
  }
`;

const SubText = styled.div`
  font-family: FSAlbert-Regular;
  padding: 2rem 1rem 0.5rem;
  font-size: 20px;
  width: 40%;
  @media (max-width: 900px) {
    padding: 1.5rem 0 0.5rem 0.5rem;
    width: 90%;
    font-size: 16px;
    text-align: left;
  }
`;

const PulseText = styled.div`
  font-family: FSAlbert-Bold;
  padding: 1rem 1rem 0.5rem;
  font-size: 20px;
  @media (max-width: 900px) {
    padding: 1rem 0.5rem 0.5rem;
    font-size: 16px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImageTag = styled.img`
  height: 36px;
  width: 123px;
  margin: 1rem 0 1rem 1rem;
  @media (max-width: 900px) {
    margin: 0.5rem 0 0.5rem 0.5rem;
  }
`;

class LandingHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subText: '',
      desktopImage: '',
      mobileImage: '',
      width: 0,
      heroIndex: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onSlideChanged = this.onSlideChanged.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  onSlideChanged(e) {
    this.setState({
      heroIndex: e.item,
    });
  }

  renderHeroItems() {
    const locale = this.props.intl.locale;

    const HeroContents = [
      {
        title: 'landing.hero.01.title',
        subText: '',
        desktopImage:
          locale === 'en'
            ? require('images/landing_hero_banners/herobanner-desktop-en-01.jpg')
            : require('images/landing_hero_banners/herobanner-desktop-bm-01.jpg'),
        mobileImage:
          locale === 'en'
            ? require('images/landing_hero_banners/herobanner-mobile-en-01.jpg')
            : require('images/landing_hero_banners/herobanner-mobile-bm-01.jpg'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#ffffff',
        alt: 'alt.01.banner',
      },
      {
        title: 'landing.hero.1.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-1.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-1.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#687379',
        mobileColor: '#687379',
        shadow: 'unset',
        alt: 'alt.1.banner',
      },
      {
        title: 'landing.hero.2.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-2.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-2.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#ffffff',
        alt: 'alt.2.banner',
      },
      {
        title: 'landing.hero.3.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-3.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-3.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#ffffff',
        alt: 'alt.3.banner',
      },
      {
        title: 'landing.hero.4.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-4.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-4.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#ffffff',
        alt: 'alt.4.banner',
      },
      {
        title: 'landing.hero.5.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-5.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-5.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#ffffff',
        alt: 'alt.5.banner',
      },
      {
        title: 'landing.hero.6.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-6.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-6.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#687379',
        shadow: 'unset',
        alt: 'alt.6.banner',
      },
      {
        title: 'landing.hero.7.title',
        subText: 'landing.hero.subtext',
        desktopImage: require('images/landing_hero_banners/herobanner-desktop-7.png'),
        mobileImage: require('images/landing_hero_banners/herobanner-mobile-7.png'),
        desktopSize: '65px',
        mobileSize: '18px',
        desktopColor: '#ffffff',
        mobileColor: '#ffffff',
        alt: 'alt.7.banner',
      },
    ];

    var imagePlayStore =
      locale === 'en'
        ? require('images/download_buttons/google-play-badge.png')
        : require('images/download_buttons/google-play-badge-bm.png');

    var imageAppStore =
      locale === 'en'
        ? require('images/download_buttons/app-store-badge.png')
        : require('images/download_buttons/app-store-badge-bm.png');
    return HeroContents.map(content => (
      <HeroContainer
        id="home"
        title={this.props.intl.formatMessage({ id: content.alt })}
        style={{
          textAlign: 'center',
          maxHeight: '',
          padding: '2rem 0',
          background:
            this.state.width > 900
              ? `url(${content.desktopImage}) center center / cover`
              : `url(${content.mobileImage}) center center / cover`,
        }}
      >
        <img
          src=""
          style={{
            display: 'none',
            width: 0,
            height: 0,
          }}
          alt={this.props.intl.formatMessage({ id: content.alt })}
        />
        <HeroSplit>
          <HeroText
            style={{
              color: this.state.width > 900 ? content.desktopColor : content.mobileColor,
              textShadow: content.shadow,
            }}
          >
            <HeroTitle
              style={{
                fontWeight: '700',
                fontSize: this.state.width > 900 ? content.desktopSize : content.mobileSize,
              }}
            >
              {this.props.intl.formatMessage({
                id: content.alt === 'alt.01.banner' ? 'landing.hero.title.01' : 'landing.hero.title.1',
              })}

              <span style={{ color: '#ed1b2e' }}>
                {this.props.intl.formatMessage({
                  id: content.alt === 'alt.01.banner' ? 'landing.hero.title.02' : 'landing.hero.title.2',
                })}
              </span>
              {locale === 'en'
                ? this.props.intl.formatMessage({
                    id: content.alt === 'alt.01.banner' ? 'landing.hero.title.03' : 'landing.hero.title.3',
                  })
                : null}
            </HeroTitle>

            <HeroUnderlineText
              style={{
                fontSize: this.state.width > 900 ? content.desktopSize : content.mobileSize,
              }}
            >
              {locale === 'my'
                ? this.props.intl.formatMessage({
                    id: content.alt === 'alt.01.banner' ? 'landing.hero.title.03' : 'landing.hero.title.3',
                  })
                : null}
              {content.title &&
                this.props.intl.formatMessage({
                  id: content.title,
                })}
              <div className="ribbon ribbonBig ribbonFlex" />
            </HeroUnderlineText>
            <SubText className={content.alt === 'alt.01.banner' ? 'first-banner-subtext' : null}>
              {this.props.intl.formatMessage({
                id: content.alt === 'alt.01.banner' ? 'landing.hero.01.subtext' : 'landing.hero.subtext',
              })}
            </SubText>

            <PulseText>
              {this.props.intl.formatMessage({
                id: content.alt === 'alt.01.banner' ? 'landing.hero.01.tagline01' : 'landing.hero.tagline',
              })}
              <br />
              {content.alt === 'alt.01.banner'
                ? this.props.intl.formatMessage({
                    id: 'landing.hero.01.tagline02',
                  })
                : null}
              {content.alt === 'alt.01.banner' ? null : (
                <span
                  style={{
                    color: '#ed1b2e',
                  }}
                >
                  {this.props.intl.formatMessage({
                    id: 'pulse.brand',
                  })}
                </span>
              )}
            </PulseText>
            <LogoContainer className={content.alt === 'alt.01.banner' ? 'download-button-bottom' : null}>
              <a id="download-now-ios-landing" href="https://wedopulse.page.link/YAsJ" target="_blank">
                <ImageTag alt={'App store download'} src={imageAppStore} />
              </a>
              <a id="download-now-android-landing" href="https://wedopulse.page.link/xZ9Z" target="_blank">
                <ImageTag alt={'Play store download'} src={imagePlayStore} />
              </a>
            </LogoContainer>
          </HeroText>
        </HeroSplit>
      </HeroContainer>
    ));
  }

  render() {
    return (
      <HeroContainer>
        <AliceCarousel
          dotsDisabled={true}
          className={'whatsInForYouCarousel'}
          autoPlay={true}
          autoHeight={true}
          autoPlayInterval={8000}
          duration={500}
          responsive={{ 0: { items: 1 } }}
          buttonsDisabled={true}
          keysControlDisabled={true}
          stopAutoPlayOnHover={false}
          items={this.renderHeroItems()}
        />
      </HeroContainer>
    );
  }
}

export default injectIntl(LandingHero);

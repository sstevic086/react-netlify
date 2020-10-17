import React, { Component } from 'react';

import styled from 'styled-components';

import MediaQuery from 'react-responsive';
import { injectIntl } from 'react-intl';

import Dialog from '@material-ui/core/Dialog';

import Terms from 'containers/terms/Terms';
import Privacy from 'containers/terms/Privacy';
import PrivacyBM from 'containers/terms/PrivacyBM';
import TermsBM from 'containers/terms/TermsBM';

const FooterContainer = styled.div`
  font-size: 12px;
  background: #fff;
  display: flex;
  flex-wrap: nowrap;
  height: 60px;
  padding: 0.5rem 15px;
  color: #84929b !important;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: none;
  }
`;

const FooterContainerMobile = styled.div`
  font-size: 15px;
  background: #fff;
  height: 90px;
  text-align: center;
  color: #84929b !important;
  padding: 0.5rem 15px;
`;
const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #84929b !important;
`;

const FooterComponent = props => {
  const [terms, setTerms] = React.useState(false);
  const [privacy, setPrivacy] = React.useState(false);

  const toggleTerms = () => {
    setTerms(!terms);
  };
  const togglePrivacy = () => {
    setPrivacy(!privacy);
  };
  const locale = props.intl.locale;
  return (
    <div>
      <Dialog open={terms} onClose={toggleTerms} contentStyle={{ maxWidth: 'none' }}>
        {locale === 'en' ? <Terms /> : <TermsBM />}
      </Dialog>

      <Dialog open={privacy} onClose={togglePrivacy} contentStyle={{ maxWidth: 'none' }}>
        {locale === 'en' ? <Privacy /> : <PrivacyBM />}
      </Dialog>
      <MediaQuery maxWidth={700}>
        <FooterContainerMobile>
          <div
            style={{
              padding: '0 1rem',
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                height: '40px',
                width: 'auto',
                display: 'inline-block',
              }}
            >
              <img
                src={require('images/footer-pulse-logo.png')}
                style={{
                  height: '40px',
                  width: 'auto',
                }}
              />
            </div>
            <div>
              {props.intl.formatMessage({
                id: 'footer.copyright',
              })}
            </div>
            <div
              style={{
                display: 'flex',
                textAlign: 'center',
                fontSize: '12px',
                padding: '1rem 0',
                justifyContent: 'center',
              }}
            >
              <Link
                onClick={toggleTerms}
                style={{
                  padding: '0 1rem',
                  cursor: 'pointer',
                }}
              >
                {props.intl.formatMessage({
                  id: 'footer.terms',
                })}
              </Link>
              <Link
                onClick={togglePrivacy}
                style={{
                  padding: '0 1rem',
                  cursor: 'pointer',
                }}
              >
                {props.intl.formatMessage({
                  id: 'footer.privacy',
                })}
              </Link>
            </div>
          </div>
        </FooterContainerMobile>
      </MediaQuery>
      <FooterContainer>
        <div
          style={{
            textAlign: 'left',
            padding: '0 1 rem',
          }}
        >
          <div
            style={{
              height: '40px',
              width: 'auto',
              padding: '0 0.5rem',
            }}
          >
            <img
              src={require('images/footer-pulse-logo.png')}
              style={{
                height: '40px',
                width: 'auto',
              }}
            />
          </div>
          <div
            style={{
              textAlign: 'left',
              padding: '0.5rem',
            }}
          >
            {props.intl.formatMessage({
              id: 'footer.copyright',
            })}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '0 1rem',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '14px',
          }}
        >
          <Link
            onClick={toggleTerms}
            style={{
              padding: '1rem',
              cursor: 'pointer',
            }}
          >
            {props.intl.formatMessage({
              id: 'footer.terms',
            })}
          </Link>
          <Link
            onClick={togglePrivacy}
            style={{
              padding: '1rem',
              cursor: 'pointer',
            }}
          >
            {props.intl.formatMessage({
              id: 'footer.privacy',
            })}
          </Link>
        </div>
      </FooterContainer>
    </div>
  );
};

const Footer = injectIntl(FooterComponent);
export default Footer;

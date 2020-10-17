import React, { Component } from 'react';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import { injectIntl } from 'react-intl';
import queryString from 'query-string';
import '../../App.css';

const DownloadText = styled.div`
  font-size: 20px;
  padding: 1rem;
  text-align: center;
  color: #999;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const StoreButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const StoreButtonContainer = styled.a`
  display: flex;
  justify-content: flex-start;
`;
const StoreButton = styled.img`
  height: 38px;
  width: 124px;
  margin-right: 1rem;
  @media (max-width: 900px) {
  }
`;

// setting cache to display popup after 3 days

const THREE_DAYS_MS = 259200000;
const Popup = props => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const qs = queryString.parse(window.location.search);
    var url = window.location.pathname;

    if (url === '/my/p/enjoy-a-treat-from-us-today/' || url === '/p/enjoy-a-treat-from-us-today') {
    } else if (qs.utm_language) {
      const prev = window.localStorage && window.localStorage.getItem('shownPopup');
      const prev2 = window.localStorage && window.localStorage.getItem('shownPopup2');

      if (prev) {
        const shownPopupMilli = prev;
        const todayInMilli = new Date().getTime();

        if (prev2) {
          if (shownPopupMilli < todayInMilli) {
            setOpen(true);

            // only show popup in three days
            window.localStorage.setItem('shownPopup', new Date().getTime() + THREE_DAYS_MS);
            window.localStorage.setItem('shownPopup2', new Date().getTime() + THREE_DAYS_MS);
          }
        } else {
          setOpen(true);

          // only show popup in three days
          window.localStorage.setItem('shownPopup', new Date().getTime() + THREE_DAYS_MS);
          window.localStorage.setItem('shownPopup2', new Date().getTime() + THREE_DAYS_MS);
        }
      } else {
        window.localStorage.setItem('shownPopup', new Date().getTime() + THREE_DAYS_MS);

        setOpen(true);
      }
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const locale = props.intl.locale;

  var image =
    locale === 'en' ? require('images/popup/popup-banner-en.jpg') : require('images/popup/popup-banner-bm.jpg');
  var imagePlayStore =
    locale === 'en'
      ? require('images/download_buttons/google-play-badge.png')
      : require('images/download_buttons/google-play-badge-bm.png');

  var imageAppStore =
    locale === 'en'
      ? require('images/download_buttons/app-store-badge.png')
      : require('images/download_buttons/app-store-badge-bm.png');
  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        background: 'transparent',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
        onClick={handleClose}
      >
        <Paper
          style={{
            background: 'white',
            maxWidth: 600,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: 0,
              color: 'white',
            }}
            onClick={handleClose}
          >
            <i className="fa fa-times fa-2x" />
          </div>
          {/* <a
            id="popup-click"
            href={props.intl.formatMessage({
              id: 'promos.1.link',
            })}
          > */}
          <div className="popup-text">
            {props.intl.formatMessage({
              id: 'popup.popup-text',
            })}
          </div>
          <div className="popup-subtext">
            {props.intl.formatMessage({
              id: 'popup.popup-subtext',
            })}
          </div>
          <img
            src={image}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          {/* </a> */}
          <StoreButtons
            style={{
              position: 'absolute',
              top: '86%',
              left: '8%',
            }}
          >
            <StoreButtonContainer href="https://wedopulse.page.link/YAsJ" target="_blank">
              <StoreButton alt={'App store download'} src={imageAppStore} />
            </StoreButtonContainer>
            <StoreButtonContainer href="https://wedopulse.page.link/xZ9Z" target="_blank">
              <StoreButton alt={'Play store download'} src={imagePlayStore} />
            </StoreButtonContainer>
          </StoreButtons>
        </Paper>
      </div>
    </Modal>
  );
};

export default injectIntl(Popup);

import React, { Component } from 'react';
import styles from 'containers/terms/Legal.module.css';

const Landing = () => {
  return (
    <div className="modal-content">
      {/* <div className="modal-header">
        <h5 className="modal-title" id="modalTitle">
          NOTIS PRIVASI PULSE
        </h5>
      </div> */}
      <div classNameName="modal-body">
        <iframe
          width={window.innerWidth - 80}
          height={window.innerHeight - 180}
          frameborder="0"
          src={`https://docs.google.com/gview?url=${'https://qex.mx/doc/Pulse Privacy Notice v6 OnePulse final (DONE)_R_Clean.docx'}&embedded=true`}
        ></iframe>
      </div>
    </div>
  );
};

export default Landing;

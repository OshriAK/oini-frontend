import React from 'react';

import './MessageBox.css';

const MessageBox = (props) => {
  return (
    <div
      className={`messageBox-alert messageBox-alert-${props.variant || 'info'}`}
    >
      {props.children}
    </div>
  );
};

export default MessageBox;

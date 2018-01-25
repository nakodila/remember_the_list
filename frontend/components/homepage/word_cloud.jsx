import React from 'react';

const WordBubble = ({ words, classn }) => (
  <div className={ classn }>
    <img src={window.staticImages.logoNoWords} alt="logo" className="logo-no-words"/>
    <p className="message">{ words }</p>
  </div>
);

export default WordBubble;

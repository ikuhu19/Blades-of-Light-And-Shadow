import React from 'react';

const Rune = ({ children, secret }) => {
  return (
    <span className="whispering-rune">
      {children}
      <span className="rune-secret">{secret}</span>
    </span>
  );
};

export default Rune;
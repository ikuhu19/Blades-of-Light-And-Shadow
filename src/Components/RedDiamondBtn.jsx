import React from 'react';

const RedDiamondBtn = ({ label, onClick }) => (
  <button className="nav-container" onClick={onClick} aria-label={label}>
    <div className="red-diamond-btn" />
    <span className="nav-label">{label}</span>
  </button>
);

export default RedDiamondBtn;
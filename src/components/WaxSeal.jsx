import React, { useState } from 'react';

const WaxSeal = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 800);
  };

  return (
    <div className="wax-seal-container">
      <div
        className={`wax-seal ${isPressed ? 'is-stamped' : ''}`}
        onClick={handlePress}
        role="button"
        tabIndex={0}
        aria-label="Affix The Green Catalyst Wax Seal"
        title="Click to press the alchemist's seal"
        onKeyDown={(e) => e.key === 'Enter' && handlePress()}
      >
        <span className="seal-emblem">GC</span>
        {isPressed && <span className="seal-ripple" aria-hidden="true" />}
      </div>
      <p className="seal-text">
        {isPressed ? '✦ SEAL AFFIXED & CHRONICLED ✦' : 'The Green Catalyst'}
      </p>
    </div>
  );
};

export default WaxSeal;
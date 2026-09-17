import React, { useState } from 'react';

const REALM_CHAMBERS = [
  {
    index: 0,
    shortName: 'PROLOGUE',
    title: 'THE SKY REALM',
    lore: 'Sea of clouds, prophecy & the awakening',
    sigil: '⚔️'
  },
  {
    index: 1,
    shortName: 'THE JOURNEY',
    title: 'THE MISTBOUND PATH',
    lore: 'Scholar-Scribe crossing the castle ramparts',
    sigil: '🦉'
  },
  {
    index: 2,
    shortName: 'THE ARSENAL',
    title: 'HALL OF RELICS',
    lore: 'Mastered programming runes & architectural tools',
    sigil: '⚡'
  },
  {
    index: 3,
    shortName: 'REALM OF CREATIONS',
    title: 'THE PORTAL GALLERY',
    lore: 'The eleven forged artifacts & systems',
    sigil: '🌀'
  },
  {
    index: 4,
    shortName: 'THE SCROLLS',
    title: 'THE SCRIPTORIUM',
    lore: 'Thirteen philosophical manuscripts & essays',
    sigil: '📜'
  },
  {
    index: 5,
    shortName: 'THE ORACLE',
    title: 'FINAL CHAMBER',
    lore: 'Observatory dispatch altar & correspondence',
    sigil: '⚜️'
  },
];

const JourneyHUD = ({
  currentChapter,
  onSelectChapter,
  isMidnight,
  isPlaying,
  toggleMusic,
  toggleTheme,
  onReturnToWorldView,
}) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const activeChamber = REALM_CHAMBERS[currentChapter] || REALM_CHAMBERS[0];
  const progressPercent = ((currentChapter + 1) / REALM_CHAMBERS.length) * 100;

  return (
    <>
      {/* Top Left: Magical Compass & Realm Location Sigil */}
      <div className="magical-hud-compass-anchor" onClick={(e) => e.stopPropagation()}>
        <button
          className="hud-compass-btn"
          onClick={() => setIsMapOpen(!isMapOpen)}
          aria-label="Open Realm Quest Map"
          title="Open Realm Quest Map & Fast Travel"
        >
          <div className="compass-dial">
            <span className="compass-needle">✦</span>
          </div>
          <div className="hud-location-info">
            <span className="hud-location-roman">{activeChamber.shortName}</span>
            <span className="hud-location-title">{activeChamber.title}</span>
          </div>
          <span className="hud-map-arrow">{isMapOpen ? '▲' : '▼'}</span>
        </button>

        {/* Subtle Realm Journey Progress Thread */}
        <div className="hud-crimson-progress-track" aria-hidden="true">
          <div
            className="hud-crimson-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Top Right: Realm Atmosphere & Music Sigils */}
      <div
        className="realm-controls-wrapper fantasy-carved-controls"
        onClick={(e) => e.stopPropagation()}
      >
        {/* World View / Sky Realm Reset Button */}
        {onReturnToWorldView && (
          <button
            className="hud-world-view-btn"
            onClick={onReturnToWorldView}
            aria-label="Return to Cloud Sky Realm View"
            title="Sky Realm View"
          >
            <span className="hud-btn-icon">☁️</span>
            <span className="hud-btn-label">SKY REALM</span>
          </button>
        )}

        {/* Animated Crimson Waveform (Active when music plays) */}
        <div
          className={`music-waveform ${isPlaying ? 'is-active' : ''}`}
          aria-hidden="true"
          title={isPlaying ? 'Soundtrack Awakened' : 'Soundtrack Silent'}
        >
          <span className="wave-bar bar-1"></span>
          <span className="wave-bar bar-2"></span>
          <span className="wave-bar bar-3"></span>
          <span className="wave-bar bar-4"></span>
        </div>

        {/* Theme Scribe Shift Button */}
        <button
          className="theme-toggle-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
          aria-label="Toggle Eclipse Starlight Scribe Mode"
          title="Toggle Eclipse Starlight Mode"
        >
          {isMidnight ? '☀' : '☾'}
        </button>

        {/* Music Toggle Button */}
        <button
          className="music-toggle-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleMusic();
          }}
          aria-label="Toggle Background Music"
          title="Toggle Continuous Soundtrack"
        >
          {isPlaying ? '☽ SILENCE' : '♫ SUMMON TUNE'}
        </button>
      </div>

      {/* Realm Chamber Fast Travel / Stepper Controls */}
      <nav className="hud-chamber-stepper" aria-label="Realm Travel Stepper">
        {currentChapter > 0 && (
          <button
            className="stepper-waypoint-btn prev-stepper"
            onClick={() => onSelectChapter(currentChapter - 1)}
            aria-label="Travel back to previous chamber"
            title={`Travel to ${REALM_CHAMBERS[currentChapter - 1].shortName}`}
          >
            <span className="stepper-arrow">‹</span>
            <span className="stepper-label">
              {REALM_CHAMBERS[currentChapter - 1].shortName}
            </span>
          </button>
        )}

        {currentChapter < REALM_CHAMBERS.length - 1 && (
          <button
            className="stepper-waypoint-btn next-stepper"
            onClick={() => onSelectChapter(currentChapter + 1)}
            aria-label="Advance deeper into the realm"
            title={`Travel to ${REALM_CHAMBERS[currentChapter + 1].shortName}`}
          >
            <span className="stepper-label">
              {REALM_CHAMBERS[currentChapter + 1].shortName}
            </span>
            <span className="stepper-arrow">›</span>
          </button>
        )}
      </nav>

      {/* Ancient Realm Quest Map Modal */}
      {isMapOpen && (
        <div
          className="journey-map-overlay"
          onClick={() => setIsMapOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Chronicle Realm Map"
        >
          <div
            className="journey-map-container fantasy-realm-map"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="map-header">
              <span className="crimson-eclipse-sigil">♦</span>
              <h2 className="map-title">CHRONICLE QUEST MAP</h2>
              <span className="crimson-eclipse-sigil">♦</span>
              <button
                className="map-close-btn"
                onClick={() => setIsMapOpen(false)}
                aria-label="Close Map"
              >
                ✕
              </button>
            </div>
            <p className="map-subtitle">Select a castle sanctuary or chamber to travel immediately</p>

            <div className="map-chapters-list">
              {REALM_CHAMBERS.map((chamber) => {
                const isActive = chamber.index === currentChapter;
                return (
                  <button
                    key={chamber.index}
                    className={`map-chapter-item ${isActive ? 'is-active-chamber' : ''}`}
                    onClick={() => {
                      onSelectChapter(chamber.index);
                      setIsMapOpen(false);
                    }}
                  >
                    <div className="chamber-sigil-badge">
                      <span className="chamber-icon">{chamber.sigil}</span>
                    </div>
                    <div className="chapter-meta">
                      <div className="chapter-name">
                        <span className="chamber-short-tag">{chamber.shortName}</span>
                        <span className="chamber-full-title">{chamber.title}</span>
                      </div>
                      <div className="chapter-desc">{chamber.lore}</div>
                    </div>
                    {isActive && <span className="chamber-active-badge">CURRENT SANCTUARY</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JourneyHUD;

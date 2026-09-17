import React, { useState } from 'react';

const CHAPTERS = [
  { index: 0, roman: 'PROLOGUE', title: 'BLADES OF LIGHT & SHADOW', desc: 'The Awakening & First Prophecy' },
  { index: 1, roman: 'CHAPTER II', title: 'THE WANDERER', desc: 'Scholar-Scribe & The Crossroads' },
  { index: 2, roman: 'CHAPTER III', title: 'THE CRAFT', desc: 'The Arsenal of Artifacts & Code' },
  { index: 3, roman: 'CHAPTER IV', title: 'THE WORKS', desc: 'Archive of Forged Creations' },
  { index: 4, roman: 'CHAPTER V', title: 'THE SCROLLS', desc: 'Manuscripts of the Scriptorium' },
  { index: 5, roman: 'CHAPTER VI', title: 'THE RAVEN', desc: 'Dispatch Word to the Tower' },
];

const JourneyHUD = ({
  currentChapter,
  onSelectChapter,
  isMidnight,
  isPlaying,
  toggleMusic,
  toggleTheme,
}) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const current = CHAPTERS[currentChapter] || CHAPTERS[0];
  const progressPercent = ((currentChapter + 1) / CHAPTERS.length) * 100;

  return (
    <>
      {/* Top Left: Ancient Chapter Indicator & Journey Map Button */}
      <div className="journey-hud-top-left" onClick={(e) => e.stopPropagation()}>
        <button
          className="hud-map-btn"
          onClick={() => setIsMapOpen(!isMapOpen)}
          aria-label="Open Journey Map & Chapter Index"
          title="Open Journey Map"
        >
          <span className="hud-sigil">⚜</span>
          <span className="hud-chapter-text">
            {current.roman} <span className="hud-sep">•</span> {current.title}
          </span>
          <span className="hud-toggle-arrow">{isMapOpen ? '▲' : '▼'}</span>
        </button>

        {/* Subtle Progress Bar */}
        <div className="hud-progress-track" aria-hidden="true">
          <div
            className="hud-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Top Right: Realm Controls (Theme, Music, & Waveform) */}
      <div
        className="realm-controls-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Waveform Bars (only when playing) */}
        <div
          className={`music-waveform ${isPlaying ? 'is-active' : ''}`}
          aria-hidden="true"
          title={isPlaying ? 'The Bard plays' : 'Silence'}
        >
          <span className="wave-bar bar-1"></span>
          <span className="wave-bar bar-2"></span>
          <span className="wave-bar bar-3"></span>
          <span className="wave-bar bar-4"></span>
        </div>

        {/* Existing Midnight Mode Button */}
        <button
          className="theme-toggle-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
          aria-label="Toggle Midnight Mode"
          title="Toggle Midnight Scribe Mode"
        >
          {isMidnight ? '☀' : '☾'}
        </button>

        {/* Existing Music Toggle Button */}
        <button
          className="music-toggle-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleMusic();
          }}
          aria-label="Toggle Background Music"
        >
          {isPlaying ? '☽ SILENCE' : '♫ SUMMON TUNE'}
        </button>
      </div>

      {/* Chapter Step Controls (Prev / Next Quick Waypoints) */}
      <nav className="hud-waypoints-nav" aria-label="Chapter Quick Navigation">
        {currentChapter > 0 && (
          <button
            className="hud-waypoint-btn prev-waypoint"
            onClick={() => onSelectChapter(currentChapter - 1)}
            aria-label="Previous Chapter"
            title="Return to Previous Chapter"
          >
            <span className="waypoint-arrow">‹</span>
            <span className="waypoint-text">PREV</span>
          </button>
        )}

        {currentChapter < CHAPTERS.length - 1 && (
          <button
            className="hud-waypoint-btn next-waypoint"
            onClick={() => onSelectChapter(currentChapter + 1)}
            aria-label="Next Chapter"
            title="Advance to Next Chapter"
          >
            <span className="waypoint-text">NEXT</span>
            <span className="waypoint-arrow">›</span>
          </button>
        )}
      </nav>

      {/* Ancient Journey Map Overlay / Modal */}
      {isMapOpen && (
        <div
          className="journey-map-overlay"
          onClick={() => setIsMapOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Chronicle Chapters Index"
        >
          <div
            className="journey-map-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="map-header">
              <span className="diamond-rune">♦</span>
              <h2 className="map-title">CHRONICLE OF THE REALMS</h2>
              <span className="diamond-rune">♦</span>
              <button
                className="map-close-btn"
                onClick={() => setIsMapOpen(false)}
                aria-label="Close Map"
              >
                ✕
              </button>
            </div>
            <p className="map-subtitle">Select a destination in the manuscript</p>

            <div className="map-chapters-list">
              {CHAPTERS.map((chap) => {
                const isActive = chap.index === currentChapter;
                return (
                  <button
                    key={chap.index}
                    className={`map-chapter-item ${isActive ? 'is-current' : ''}`}
                    onClick={() => {
                      onSelectChapter(chap.index);
                      setIsMapOpen(false);
                    }}
                  >
                    <div className="chapter-marker">
                      <span className="marker-diamond">{isActive ? '✦' : '♦'}</span>
                      <span className="marker-roman">{chap.roman}</span>
                    </div>
                    <div className="chapter-meta">
                      <div className="chapter-name">{chap.title}</div>
                      <div className="chapter-desc">{chap.desc}</div>
                    </div>
                    {isActive && <span className="current-badge">YOU ARE HERE</span>}
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

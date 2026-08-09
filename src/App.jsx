import React, { useState, useRef, useEffect } from 'react';
import Prologue from './pages/Prologue';
import Wanderer from './pages/Wanderer';
import Craft from './pages/Craft';
import Works from './pages/Works';
import Scrolls from './pages/Scrolls';
import Raven from './pages/Raven';

const App = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMidnight, setIsMidnight] = useState(false);
  const audioRef = useRef(null);

  // Handle the Music
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.log("Audio Error:", err);
        });
    }
  };

  // Handle the Midnight Theme
  const toggleTheme = () => {
    setIsMidnight(!isMidnight);
  };

  // Apply the CSS class to the body whenever the theme changes
  useEffect(() => {
    if (isMidnight) {
      document.body.classList.add('midnight-mode');
    } else {
      document.body.classList.remove('midnight-mode');
    }
  }, [isMidnight]);

  const pages = [
    <Prologue onNextPage={() => setCurrentChapter(1)} />,
    <Wanderer onNextPage={() => setCurrentChapter(2)} />,
    <Craft onNextPage={() => setCurrentChapter(3)} />,
    <Works onNextPage={() => setCurrentChapter(4)} />,
    <Scrolls onNextPage={() => setCurrentChapter(5)} />,
    <Raven onNextPage={() => setCurrentChapter(0)} />
  ];

  return (
    <>
      {/* Hidden Audio Player - MUST be here for sound to work */}
      <audio
        ref={audioRef}
        src="/blades-of-light-shadow/tune.mp3.mp3.mp3"
        loop
        preload="auto"
      />

      {/* The Ancient Heavy Mist */}
      <div className="ancient-fog"></div>

      {/* The Global Inscription (Footer) */}
      <div className="global-inscription">
        <span className="diamond-rune">♦</span>
        <span>THE CHRONICLE OF MAANYTA KATARE</span>
        <span className="diamond-rune">♦</span>
      </div>
      
      {/* Global Control Buttons - Inline styles force perfect layout */}
      <div
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          display: 'flex',
          gap: '1rem',
          zIndex: 100,
          alignItems: 'center'
        }}
      >
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          aria-label="Toggle Midnight Mode"
          style={{
            position: 'relative',
            margin: 0,
            height: '32px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {isMidnight ? '☀' : '☾'}
        </button>

        <button 
          className="music-toggle-btn" 
          onClick={toggleMusic}
          aria-label="Toggle Background Music"
          style={{
            position: 'relative',
            margin: 0,
            height: '32px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {isPlaying ? '☽ SILENCE' : '♫ SUMMON TUNE'}
        </button>
      </div>

      {/* The Manuscript Pages */}
      {pages[currentChapter]}
    </>
  );
};

export default App;
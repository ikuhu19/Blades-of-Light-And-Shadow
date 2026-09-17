import React, { useState, useRef, useEffect } from 'react';
import Prologue from './pages/Prologue';
import Wanderer from './pages/Wanderer';
import Craft from './pages/Craft';
import Works from './pages/Works';
import Scrolls from './pages/Scrolls';
import Raven from './pages/Raven';
import JourneyHUD from './components/JourneyHUD';
import AmbientLighting from './components/AmbientLighting';
import CinematicWorldCanvas from './components/CinematicWorldCanvas';

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMidnight, setIsMidnight] = useState(false);
  const audioRef = useRef(null);

  // Smooth Chapter Navigation with auto-scroll to top
  const handleSelectChapter = (index) => {
    setCurrentChapter(index);
    if (!hasEntered) {
      setHasEntered(true);
      setIsEntering(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle the Music Playback
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
        .catch((err) => {
          console.log("Audio Playback Notice:", err);
        });
    }
  };

  // Start music explicitly on user interaction
  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Audio Playback Notice:", err);
      });
  };

  // Handle Enter The Chronicle CTA (Camera flight into castle)
  const handleEnterWorld = () => {
    startMusic();
    setIsEntering(true);
  };

  // Immediate Skip Intro
  const handleSkipIntro = () => {
    startMusic();
    setHasEntered(true);
    setIsEntering(false);
    setCurrentChapter(0);
  };

  // Return to Cloudscape World View
  const handleReturnToWorldView = () => {
    setHasEntered(false);
    setIsEntering(false);
  };

  // Handle the Midnight / Starlight Theme
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

  // Scroll to top on chapter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapter]);

  const pages = [
    <Prologue 
      key="prologue"
      onNextPage={() => handleSelectChapter(1)} 
      isPlaying={isPlaying}
      onStartMusic={startMusic}
      isMidnight={isMidnight}
    />,
    <Wanderer 
      key="wanderer"
      onNextPage={() => handleSelectChapter(2)} 
      isMidnight={isMidnight}
    />,
    <Craft 
      key="craft"
      onNextPage={() => handleSelectChapter(3)} 
      isMidnight={isMidnight}
    />,
    <Works 
      key="works"
      onNextPage={() => handleSelectChapter(4)} 
      isMidnight={isMidnight}
    />,
    <Scrolls 
      key="scrolls"
      onNextPage={() => handleSelectChapter(5)} 
      isMidnight={isMidnight}
    />,
    <Raven 
      key="raven"
      onNextPage={() => handleSelectChapter(0)} 
      isMidnight={isMidnight}
    />
  ];

  return (
    <>
      {/* Persistent Audio Player across all chapters & routes */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}tune.mp3.mp3.mp3`}
        loop
        preload="auto"
      />

      {/* Dynamic Crimson & Shadow Cursor Follower */}
      <AmbientLighting isMidnight={isMidnight} />

      {/* 3D Cinematic Sky Realm & Mountain Castle Background Canvas */}
      <CinematicWorldCanvas
        isEntering={isEntering}
        isMidnight={isMidnight}
        onFlightComplete={() => {
          setHasEntered(true);
          setIsEntering(false);
        }}
      />

      {/* The Ancient Heavy Mist Layer */}
      <div className="ancient-fog" style={{ pointerEvents: 'none' }} aria-hidden="true"></div>

      {/* ==========================================
         CINEMATIC HERO / OPENING OVERLAY
         ========================================== */}
      {!hasEntered && (
        <div className={`cinematic-opening-hero ${isEntering ? 'flight-active' : ''}`}>
          <div className="hero-atmosphere-vignette" />
          
          <div className="hero-content-frame">
            <div className="hero-realm-badge">
              <span className="badge-gem">♦</span>
              <span className="badge-text">AN INTERACTIVE FANTASY CHRONICLE</span>
              <span className="badge-gem">♦</span>
            </div>

            <h1 className="hero-grand-title">
              BLADES OF LIGHT & SHADOW
            </h1>
            
            <p className="hero-grand-subtitle">
              The Chronicle of Maanyta Katare
            </p>

            <div className="hero-divider-rune">
              <span className="rune-line"></span>
              <span className="rune-sigil">⚜</span>
              <span className="rune-line"></span>
            </div>

            <p className="hero-lore-caption">
              Above a vast sea of rolling clouds at dusk, an ancient black fortress rises against a blood-red eclipse.
              The winged guardian takes flight to guide your path into the realm of logic, code, and story.
            </p>

            <div className="hero-cta-group">
              <button
                className="hero-enter-btn"
                onClick={handleEnterWorld}
                aria-label="Enter the Chronicle and fly through clouds toward castle"
              >
                <span className="enter-btn-glow" />
                <span className="enter-btn-icon">⚔️</span>
                <span className="enter-btn-text">ENTER THE CHRONICLE</span>
              </button>

              <button
                className="hero-skip-btn"
                onClick={handleSkipIntro}
                aria-label="Skip cinematic introduction and open chapters directly"
              >
                SKIP INTRO • DIRECT ACCESS ➔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
         EXPEDITION EXPERIENCE (HUD & CHAMBERS)
         ========================================== */}
      {hasEntered && (
        <>
          {/* Floating Magical HUD & Quest Compass */}
          <JourneyHUD
            currentChapter={currentChapter}
            onSelectChapter={handleSelectChapter}
            isMidnight={isMidnight}
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
            toggleTheme={toggleTheme}
            onReturnToWorldView={handleReturnToWorldView}
          />

          {/* Active World Chamber Page */}
          <div className="realm-chamber-wrapper key-fade">
            {pages[currentChapter]}
          </div>

          {/* The Global Inscription (Footer) */}
          <footer className="global-inscription">
            <span className="diamond-rune">♦</span>
            <span>THE CHRONICLE OF MAANYTA KATARE • BLADES OF LIGHT & SHADOW</span>
            <span className="diamond-rune">♦</span>
          </footer>
        </>
      )}
    </>
  );
};

export default App;
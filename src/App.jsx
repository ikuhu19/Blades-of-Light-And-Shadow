import React, { useState, useRef, useEffect } from 'react';
import Prologue from './pages/Prologue';
import Wanderer from './pages/Wanderer';
import Craft from './pages/Craft';
import Works from './pages/Works';
import Scrolls from './pages/Scrolls';
import Raven from './pages/Raven';
import JourneyHUD from './components/JourneyHUD';
import AmbientLighting from './components/AmbientLighting';

const App = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMidnight, setIsMidnight] = useState(false);
  const audioRef = useRef(null);

  // Smooth Chapter Navigation with auto-scroll to top
  const handleSelectChapter = (index) => {
    setCurrentChapter(index);
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

  // Start music explicitly on user interaction (e.g. Prologue Begin Journey)
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
      {/* Persistent Hidden Audio Player matching exact file name */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}tune.mp3.mp3.mp3`}
        loop
        preload="auto"
      />

      {/* Dynamic Light vs Shadow Cursor Follower */}
      <AmbientLighting isMidnight={isMidnight} />

      {/* The Ancient Heavy Mist */}
      <div className="ancient-fog" style={{ pointerEvents: 'none' }} aria-hidden="true"></div>

      {/* Interactive Game HUD & Journey Map System */}
      <JourneyHUD
        currentChapter={currentChapter}
        onSelectChapter={handleSelectChapter}
        isMidnight={isMidnight}
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
        toggleTheme={toggleTheme}
      />

      {/* The Global Inscription (Footer) */}
      <footer className="global-inscription">
        <span className="diamond-rune">♦</span>
        <span>THE CHRONICLE OF MAANYTA KATARE</span>
        <span className="diamond-rune">♦</span>
      </footer>

      {/* The Manuscript Page with Cinematic Chapter Transition */}
      <div className="chapter-transition-wrapper key-fade">
        {pages[currentChapter]}
      </div>
    </>
  );
};

export default App;
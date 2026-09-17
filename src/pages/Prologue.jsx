import React from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import Rune from '../components/Rune';

const Prologue = ({ onNextPage, onOpenMap, isPlaying, onStartMusic }) => {
  return (
    <div className="manuscript-viewport">
      <main className="prologue-container">
        
        {/* Chapter Header */}
        <ChapterTitle 
          chapter="PROLOGUE" 
          title="BLADES OF LIGHT & SHADOW" 
        />
        <div className="subtitle">The Chronicle of Maanyta Katare</div>

        {/* Decorative Divider */}
        <div className="inscription-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        {/* Prologue Story Text */}
        <article className="prologue-body">
          <p>
            <span className="drop-cap">T</span>here are stories that begin with a prophecy.
            Mine began with a question. I had no kingdom to inherit, no ancient blade 
            resting at my side, nor any map revealing where the road would lead.
          </p>
          <p>
            Only a restless mind, a handful of questions, and a strange fascination with 
            the worlds that could be built from nothing but <Rune secret="std::cout << &quot;Hello Realm&quot;; // The first spell">thought and code</Rune>.
          </p>
          <p>
            So I began to wander. Through languages I did not yet understand. Through broken 
            things I learned to mend. Through ideas that refused to remain merely ideas. 
            And somewhere along the way, I began to write.
          </p>
          <p className="call-to-turn">
            If you have found these pages, turn the first.
          </p>
        </article>

        {/* Ambient Sound Invitation (if music not yet playing) */}
        {!isPlaying && onStartMusic && (
          <div className="prologue-music-invitation">
            <button
              className="prologue-summon-btn"
              onClick={onStartMusic}
              aria-label="Begin Journey and summon background soundtrack"
            >
              <span className="summon-icon">♫</span>
              <span>BEGIN JOURNEY • AWAKEN SOUNDTRACK</span>
            </button>
          </div>
        )}

      </main>

      {/* Choice Moment Navigation */}
      <div className="prologue-choice-row">
        <RedDiamondBtn 
          label="TURN THE PAGE" 
          onClick={onNextPage} 
        />

        {onOpenMap && (
          <button
            className="secondary-choice-btn"
            onClick={onOpenMap}
            aria-label="Consult the Chronicle Index"
          >
            <span className="choice-sigil">⚜</span>
            <span className="choice-label">CONSULT THE CHRONICLE</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Prologue;
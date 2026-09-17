import React from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import Rune from '../components/Rune';
import OwlCanvas from '../components/OwlCanvas';

const Wanderer = ({ onNextPage, isMidnight }) => {
  return (
    <div className="manuscript-viewport chamber-mistbound-path">
      <main className="wanderer-container realm-chamber-card">
        
        {/* Sanctuary Header */}
        <div className="chamber-realm-tag">
          <span className="realm-sigil">🦉</span>
          <span>SANCTUARY II • THE MISTBOUND PATH</span>
        </div>

        <ChapterTitle 
          chapter="CHAPTER II" 
          title="THE WANDERER" 
        />

        {/* Core Narrative & 3D Battlement Section */}
        <section className="wanderer-main-grid">
          
          {/* Left: Ancient Stone Battlement with 3D Guardian Owl */}
          <div className="illustration-frame battlement-perch-frame">
            <div className="illustration-placeholder owl-3d-stage">
              <OwlCanvas isMidnight={isMidnight} />
              <p className="frame-caption">The Traveler at the Crossroads</p>
            </div>
          </div>

          {/* Right: The Story Layer (Preserved Verbatim) */}
          <article className="story-layer">
            <p className="story-paragraph">
              <span className="drop-cap">N</span>ot all who walk the realm were 
              born to inherit crowns. Some were born to forge them. My path began 
              far from courtly halls, in a world quiet enough to hear the echoes 
              of unanswered questions.
            </p>
            <p className="story-paragraph">
              I chose the path of the scholar-scribe—seeking mastery over the ancient 
              runes of logic and code, commanding complex systems from <Rune secret="CREATE DATABASE Employee; -- Structuring the chaos">broken foundations</Rune> 
              to towering structures. Through every broken build mended and every algorithm 
              conquered, I learned that <Rune secret="while (fails < 100) { tryAgain(); }">victory belongs to those with patience</Rune>.
            </p>
            <p className="story-paragraph">
              Yet logic alone makes for a cold kingdom. Alongside the discipline of technology, 
              I carry the art of story—the power to give thought a form, and imagination a domain. 
              I am Maanyta Katare. I walk between the realm of logic and the realm of creation, 
              and every step forward is a choice to build something lasting.
            </p>
            <p className="signature">— Maanyta Katare</p>
          </article>
        </section>

        {/* Divider */}
        <div className="inscription-divider crimson-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        {/* The Traveller's Record (Carved Monolith Slab) */}
        <section className="traveller-record monolith-record">
          <h2 className="record-heading">THE TRAVELLER'S RECORD</h2>
          
          <div className="record-grid">
            <div className="record-field">
              <span className="field-label">TRUE NAME</span>
              <span className="field-value">Maanyta Katare</span>
            </div>

            <div className="record-field">
              <span className="field-label">REALM OF STUDY</span>
              <span className="field-value">Computer Applications (BCA)</span>
            </div>

            <div className="record-field">
              <span className="field-label">CHOSEN PATH</span>
              <span className="field-value">Full-Stack Web • Software Architecture • Technical Writing</span>
            </div>

            <div className="record-field">
              <span className="field-label">QUEST / SEEKING</span>
              <span className="field-value">Software Engineering, Web Development & Creative Tech Opportunities</span>
            </div>
          </div>
        </section>

      </main>

      {/* Navigation Button */}
      <RedDiamondBtn 
        label="THE ARSENAL" 
        onClick={onNextPage} 
      />
    </div>
  );
};

export default Wanderer;
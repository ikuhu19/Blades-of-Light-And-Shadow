import React from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import WaxSeal from '../components/WaxSeal';

const Raven = ({ onNextPage }) => {
  return (
    <div className="manuscript-viewport">
      <main className="raven-container">
        
        {/* Chapter Header */}
        <ChapterTitle 
          chapter="CHAPTER VI" 
          title="THE RAVEN" 
        />

        {/* Story Intro */}
        <article className="story-layer text-center">
          <p className="story-paragraph">
            No journey in any realm is taken entirely alone. Whether you carry a quest to forge, 
            a system to build, or simply wish to exchange thoughts across the dark—dispatch 
            your word into the night. The raven knows its way.
          </p>
        </article>

        {/* Inscription Divider */}
        <div className="inscription-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        {/* Dispatch Hub / Contact Info */}
        <section className="raven-dispatch">
          <h2 className="record-heading">DISPATCH WORD TO THE TOWER</h2>
          
          <div className="dispatch-grid">
            
            {/* Direct Email Link */}
            <div className="dispatch-card">
              <span className="dispatch-symbol">🦉</span>
              <h3 className="dispatch-title">SEND A MESSAGE</h3>
              <p className="dispatch-subtitle">Direct Correspondence</p>
              <a 
                href="mailto:kuhukatarejk1@gmail.com" 
                className="dispatch-link"
              >
                Send an Email
              </a>
            </div>

            {/* GitHub Profile */}
            <div className="dispatch-card">
              <span className="dispatch-symbol">⚔️</span>
              <h3 className="dispatch-title">THE FORGE REPOSITORIES</h3>
              <p className="dispatch-subtitle">GitHub Code Vault</p>
              <a 
                href="https://github.com/ikuhu19" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dispatch-link"
              >
                View Repositories
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="dispatch-card">
              <span className="dispatch-symbol">📜</span>
              <h3 className="dispatch-title">THE COURT REGISTRY</h3>
              <p className="dispatch-subtitle">LinkedIn Profile</p>
              <a 
                href="https://www.linkedin.com/in/maantya-katare-1a0793416/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dispatch-link"
              >
                Connect on LinkedIn
              </a>
            </div>

          </div>
          <WaxSeal/>
        </section>

      </main>

      {/* Navigation Button — Loops back to Prologue */}
      <RedDiamondBtn 
        label="RETURN TO PROLOGUE" 
        onClick={onNextPage} 
      />
    </div>
  );
};

export default Raven;
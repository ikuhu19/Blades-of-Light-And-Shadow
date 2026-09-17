import React, { useState } from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import WaxSeal from '../components/WaxSeal';

const Raven = ({ onNextPage }) => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('kuhukatarejk1@gmail.com');
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="manuscript-viewport chamber-oracle-observatory">
      <main className="raven-container realm-chamber-card">
        
        {/* Sanctuary Header */}
        <div className="chamber-realm-tag">
          <span className="realm-sigil">⚜️</span>
          <span>SANCTUARY VI • THE ORACLE OBSERVATORY</span>
        </div>

        <ChapterTitle 
          chapter="CHAPTER VI" 
          title="THE RAVEN" 
        />

        {/* Story Intro (Preserved Verbatim) */}
        <article className="story-layer text-center">
          <p className="story-paragraph">
            No journey in any realm is taken entirely alone. Whether you carry a quest to forge, 
            a system to build, or simply wish to exchange thoughts across the dark—dispatch 
            your word into the night. The raven knows its way.
          </p>
        </article>

        {/* Inscription Divider */}
        <div className="inscription-divider crimson-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        {/* Dispatch Hub / Altar Info */}
        <section className="raven-dispatch oracle-altar-dispatch">
          <h2 className="record-heading">DISPATCH WORD TO THE TOWER</h2>
          
          <div className="dispatch-grid">
            
            {/* Direct Email Link */}
            <div className="dispatch-card altar-dispatch-card">
              <span className="dispatch-symbol">🦉</span>
              <h3 className="dispatch-title">SEND A MESSAGE</h3>
              <p className="dispatch-subtitle">Direct Correspondence</p>
              <a 
                href="mailto:kuhukatarejk1@gmail.com" 
                className="dispatch-link dispatch-altar-btn"
                onClick={handleCopyEmail}
                title="Send an email or click to copy address"
              >
                Send an Email
              </a>
              {copiedNotification && (
                <span className="dispatch-feedback">✦ Address Copied to Scribe Quill ✦</span>
              )}
            </div>

            {/* GitHub Profile */}
            <div className="dispatch-card altar-dispatch-card">
              <span className="dispatch-symbol">⚔️</span>
              <h3 className="dispatch-title">THE FORGE REPOSITORIES</h3>
              <p className="dispatch-subtitle">GitHub Code Vault</p>
              <a 
                href="https://github.com/ikuhu19" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dispatch-link dispatch-altar-btn"
              >
                View Repositories
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="dispatch-card altar-dispatch-card">
              <span className="dispatch-symbol">📜</span>
              <h3 className="dispatch-title">THE COURT REGISTRY</h3>
              <p className="dispatch-subtitle">LinkedIn Profile</p>
              <a 
                href="https://www.linkedin.com/in/maantya-katare-1a0793416/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dispatch-link dispatch-altar-btn"
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
        label="RETURN TO THE SKY REALM" 
        onClick={onNextPage} 
      />
    </div>
  );
};

export default Raven;
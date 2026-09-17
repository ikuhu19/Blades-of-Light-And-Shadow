import React, { useState } from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import Rune from '../components/Rune';

const Craft = ({ onNextPage }) => {
  const [activeDiscipline, setActiveDiscipline] = useState('ALL');

  return (
    <div className="manuscript-viewport chamber-arsenal-hall">
      <main className="craft-container realm-chamber-card">
        
        {/* Sanctuary Header */}
        <div className="chamber-realm-tag">
          <span className="realm-sigil">⚡</span>
          <span>SANCTUARY III • THE ARSENAL OF RELICS</span>
        </div>

        <ChapterTitle chapter="CHAPTER III" title="THE CRAFT" />

        <article className="story-layer text-center">
          <p className="story-paragraph">
            The weapons of a wanderer are many; mine happen to be made of logic. 
            To navigate the wild realms of technology, one must know which artifact to wield—and 
            have the patience to forge new ones when the <Rune secret="Debugging legacy code...">old ways fail</Rune>.
          </p>
        </article>

        <div className="inscription-divider crimson-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        <section className="craft-arsenal armory-sanctum">
          <h2 className="record-heading">THE ARSENAL OF ARTIFACTS</h2>
          
          {/* Interactive Discipline Filter Chips */}
          <div className="craft-choice-filter" role="tablist" aria-label="Discipline Filter">
            {['ALL', 'RUNES OF COMMAND', "ARCHITECT'S TOOLS", 'VAULT & SANCTUM', 'FORGE DISCIPLINE'].map((cat) => (
              <button
                key={cat}
                className={`choice-pill ${activeDiscipline === cat ? 'active' : ''}`}
                onClick={() => setActiveDiscipline(cat)}
                role="tab"
                aria-selected={activeDiscipline === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="arsenal-grid">
            <div className={`arsenal-card relic-vault-card ${activeDiscipline === 'ALL' || activeDiscipline === 'RUNES OF COMMAND' ? 'highlighted' : 'dimmed'}`}>
              <div className="relic-card-header">
                <span className="relic-icon">⚔️</span>
                <h3 className="arsenal-category">RUNES OF COMMAND</h3>
              </div>
              <p className="arsenal-subtitle">Programming Languages</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span>C/C++</li>
                <li><span className="bullet">♦</span>Javascript</li>
                <li><span className="bullet">♦</span>SQL</li>
              </ul>
            </div>

            <div className={`arsenal-card relic-vault-card ${activeDiscipline === 'ALL' || activeDiscipline === "ARCHITECT'S TOOLS" ? 'highlighted' : 'dimmed'}`}>
              <div className="relic-card-header">
                <span className="relic-icon">🏛️</span>
                <h3 className="arsenal-category">THE ARCHITECT'S TOOLS</h3>
              </div>
              <p className="arsenal-subtitle">Web & Frameworks</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span> React</li>
                <li><span className="bullet">♦</span> HTML5 & CSS3</li>
                <li><span className="bullet">♦</span> Node.js</li>
              </ul>
            </div>

            <div className={`arsenal-card relic-vault-card ${activeDiscipline === 'ALL' || activeDiscipline === 'VAULT & SANCTUM' ? 'highlighted' : 'dimmed'}`}>
              <div className="relic-card-header">
                <span className="relic-icon">🗝️</span>
                <h3 className="arsenal-category">THE VAULT & SANCTUM</h3>
              </div>
              <p className="arsenal-subtitle">Databases & Systems</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span> MySQL</li>
                <li><span className="bullet">♦</span> Relational Database Design</li>
                <li><span className="bullet">♦</span> Query Optimization</li>
              </ul>
            </div>

            <div className={`arsenal-card relic-vault-card ${activeDiscipline === 'ALL' || activeDiscipline === 'FORGE DISCIPLINE' ? 'highlighted' : 'dimmed'}`}>
              <div className="relic-card-header">
                <span className="relic-icon">🔥</span>
                <h3 className="arsenal-category">THE FORGE DISCIPLINE</h3>
              </div>
              <p className="arsenal-subtitle">Core Computer Science</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span> Data Structures & Algorithms</li>
                <li><span className="bullet">♦</span> Object-Oriented Programming (OOP)</li>
                <li><span className="bullet">♦</span> Technical Writing & Lore</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <RedDiamondBtn label="THE PORTAL GALLERY" onClick={onNextPage} />
    </div>
  );
};

export default Craft;
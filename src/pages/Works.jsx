import React, { useState } from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';

const ARTIFACTS_DATA = [
  {
    id: 1,
    number: 'ARTIFACT I',
    title: 'pieces-of-kuhu',
    runes: ['HTML', 'CSS', 'Bootstrap'],
    category: 'web',
    repoUrl: 'https://github.com/ikuhu19/pieces-of-kuhu',
    desc: 'Personal portfolio and creative space presenting writings, design sensibilities, and responsive frontend craft.'
  },
  {
    id: 2,
    number: 'ARTIFACT II',
    title: 'Chaos-button-game',
    runes: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    repoUrl: 'https://github.com/ikuhu19/Chaos-button-game',
    desc: 'An unpredictable interactive game challenging players with chaotic reactive buttons, evasive mechanics, and fast reflexes.'
  },
  {
    id: 3,
    number: 'ARTIFACT III',
    title: 'myung-momos',
    runes: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    repoUrl: 'https://github.com/ikuhu19/myung-momos',
    desc: 'Vibrant culinary showcase and digital storefront built with responsive layout and visual presentation.'
  },
  {
    id: 4,
    number: 'ARTIFACT IV',
    title: 'Blades-of-lights-and-shadows',
    runes: ['HTML', 'CSS', 'JavaScript', 'React'],
    category: 'web',
    repoUrl: 'https://github.com/ikuhu19/Blades-of-lights-and-shadows',
    desc: 'The interactive fantasy manuscript portfolio — narrative choices, ancient atmosphere, and lore-infused design.'
  },
  {
    id: 5,
    number: 'ARTIFACT V',
    title: 'ShelfShare',
    runes: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MySQL'],
    category: 'web',
    repoUrl: 'https://github.com/ikuhu19/ShelfShare',
    desc: 'Full-stack peer-to-peer book sharing and community library system powered by relational database architecture.'
  },
  {
    id: 6,
    number: 'ARTIFACT VI',
    title: 'ikuhu19',
    runes: ['GitHub', 'README'],
    category: 'logic',
    repoUrl: 'https://github.com/ikuhu19',
    desc: 'The gateway repository and developer profile detailing ongoing quests, forge skills, and open-source explorations.'
  },
  {
    id: 7,
    number: 'ARTIFACT VII',
    title: 'DSA_in_CPP',
    runes: ['C++', 'DSA'],
    category: 'logic',
    repoUrl: 'https://github.com/ikuhu19/DSA_in_CPP',
    desc: 'Comprehensive compendium of fundamental data structures, algorithms, problem-solving techniques, and memory management in C++.'
  },
  {
    id: 8,
    number: 'ARTIFACT VIII',
    title: 'DBMS-student-management',
    runes: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'logic',
    repoUrl: 'https://github.com/ikuhu19/DBMS-student-management',
    desc: 'Relational database management application for student records, enrollment tracking, queries, and structured tables.'
  },
  {
    id: 9,
    number: 'ARTIFACT IX',
    title: 'SMS-java',
    runes: ['Java'],
    category: 'logic',
    repoUrl: 'https://github.com/ikuhu19/SMS-java',
    desc: 'Robust Student Management System constructed in Java adhering to object-oriented programming paradigms.'
  },
  {
    id: 10,
    number: 'ARTIFACT X',
    title: 'java-basic-programs',
    runes: ['Java'],
    category: 'logic',
    repoUrl: 'https://github.com/ikuhu19/java-basic-programs',
    desc: 'Foundational repository of essential Java programs, syntax explorations, and computational building blocks.'
  },
  {
    id: 11,
    number: 'ARTIFACT XI',
    title: 'blog-formatter',
    runes: ['HTML'],
    category: 'web',
    repoUrl: 'https://github.com/ikuhu19/blog-formatter',
    desc: 'Text formatting utility and styling tool built to structure, polish, and prepare written chronicles for the web.'
  },
];

const Works = ({ onNextPage }) => {
  const [filter, setFilter] = useState('ALL');
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  const filteredArtifacts = ARTIFACTS_DATA.filter((art) => {
    if (filter === 'ALL') return true;
    if (filter === 'WEB') return art.category === 'web';
    if (filter === 'LOGIC') return art.category === 'logic';
    return true;
  });

  return (
    <div className="manuscript-viewport">
      <main className="works-container">
        
        {/* Chapter Header */}
        <ChapterTitle 
          chapter="CHAPTER IV" 
          title="THE WORKS" 
        />

        {/* Story Intro */}
        <article className="story-layer text-center">
          <p className="story-paragraph">
            Every line of code is an inscription upon the world. Here lie the artifacts 
            forged in curiosity, tempered in trial, and built to transform abstract logic 
            into living creations.
          </p>
        </article>

        {/* Inscription Divider */}
        <div className="inscription-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        {/* Projects Archive */}
        <section className="works-archive">
          <h2 className="record-heading">THE ARCHIVE OF ARTIFACTS</h2>

          {/* Interactive Realm Filter Choice */}
          <div className="works-filter-bar" role="tablist" aria-label="Artifact Filter">
            <button
              className={`choice-pill ${filter === 'ALL' ? 'active' : ''}`}
              onClick={() => setFilter('ALL')}
            >
              ALL ARTIFACTS ({ARTIFACTS_DATA.length})
            </button>
            <button
              className={`choice-pill ${filter === 'WEB' ? 'active' : ''}`}
              onClick={() => setFilter('WEB')}
            >
              WEB & APPLICATION REALMS
            </button>
            <button
              className={`choice-pill ${filter === 'LOGIC' ? 'active' : ''}`}
              onClick={() => setFilter('LOGIC')}
            >
              SYSTEMS & LOGIC FORGES
            </button>
          </div>
          
          <div className="works-grid">
            {filteredArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="work-card interactive-relic-card"
                onClick={() => setSelectedArtifact(artifact)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedArtifact(artifact)}
                aria-label={`Inspect ${artifact.title}`}
              >
                <div className="work-header">
                  <div className="work-header-top">
                    <span className="work-number">{artifact.number}</span>
                    <span className="inspect-sigil-hint">✦ DISCOVER</span>
                  </div>
                  <h3 className="work-title">{artifact.title}</h3>
                </div>
                <div className="work-runes">
                  {artifact.runes.map((rune, idx) => (
                    <span key={idx} className="rune-tag">{rune}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Artifact Inspection Parchment Modal */}
      {selectedArtifact && (
        <div
          className="artifact-modal-overlay"
          onClick={() => setSelectedArtifact(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedArtifact.title}
        >
          <div
            className="artifact-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="artifact-modal-header">
              <span className="work-number">{selectedArtifact.number}</span>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedArtifact(null)}
                aria-label="Close Relic Inspection"
              >
                ✕
              </button>
            </div>

            <h2 className="artifact-modal-title">{selectedArtifact.title}</h2>
            <p className="artifact-modal-desc">{selectedArtifact.desc}</p>

            <div className="artifact-modal-runes-label">INSCRIPTION RUNES:</div>
            <div className="work-runes">
              {selectedArtifact.runes.map((rune, idx) => (
                <span key={idx} className="rune-tag">{rune}</span>
              ))}
            </div>

            <div className="artifact-modal-actions">
              <a
                href={selectedArtifact.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dispatch-link inspect-open-btn"
              >
                ⚔️ EXPLORE THE REPOSITORY VAULT
              </a>
              <button
                className="inspect-return-btn"
                onClick={() => setSelectedArtifact(null)}
              >
                RETURN TO ARCHIVE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Button */}
      <RedDiamondBtn 
        label="THE SCROLLS" 
        onClick={onNextPage} 
      />
    </div>
  );
};

export default Works;
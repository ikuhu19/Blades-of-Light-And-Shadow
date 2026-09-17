import React, { useState } from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';

const SCROLLS_DATA = [
  {
    number: 'SCROLL I',
    title: 'WHO ARE YOU?',
    excerpt: 'A quiet exploration of identity, self-understanding, and the questions that remain when we begin looking beyond the person the world expects us to be.',
    tags: ['Identity', 'Reflection'],
    category: 'reflection'
  },
  {
    number: 'SCROLL II',
    title: 'UNDERSTANDING MINDS, COMMUNICATING HEARTS',
    excerpt: 'Thoughts on understanding the minds of others, communicating beyond words, and discovering how empathy shapes the way we connect.',
    tags: ['Psychology', 'Communication', 'Human Connection'],
    category: 'psychology'
  },
  {
    number: 'SCROLL III',
    title: 'LOVE: THE EMOTION WE HYPE, HURT, AND MISUNDERSTAND',
    excerpt: 'A raw exploration of love, human connection, expectations, and the invisible threads that shape the relationships we choose to hold onto.',
    tags: ['Essay', 'Emotions', 'Relationships'],
    category: 'psychology'
  },
  {
    number: 'SCROLL IV',
    title: 'THE PARADOX OF SATISFACTION',
    excerpt: 'An observation on desire, contentment, and the strange human habit of reaching for more even after having enough.',
    tags: ['Philosophy', 'Psychology'],
    category: 'reflection'
  },
  {
    number: 'SCROLL V',
    title: 'THE ENDOWMENT EFFECT',
    excerpt: 'A reflection on why we value things differently simply because they become ours, and what that reveals about attachment and human behaviour.',
    tags: ['Psychology', 'Behaviour'],
    category: 'psychology'
  },
  {
    number: 'SCROLL VI',
    title: 'SELFISH',
    excerpt: 'A closer look at selfishness, self-preservation, and the uncomfortable line between choosing yourself and becoming indifferent to others.',
    tags: ['Human Nature', 'Reflection'],
    category: 'reflection'
  },
  {
    number: 'SCROLL VII',
    title: 'IS IT REALLY THAT COMPLICATED?',
    excerpt: 'Sometimes life is complicated. Sometimes we are. A reflection on overthinking, simplicity, and the stories we create inside our own minds.',
    tags: ['Life', 'Reflection'],
    category: 'reflection'
  },
  {
    number: 'SCROLL VIII',
    title: 'PRESSURE TO HAVE EVERYTHING FIGURED OUT BY 21...',
    excerpt: 'A reflection on growing up, uncertainty, expectations, and the pressure to have an entire life mapped out before we have even begun living it.',
    tags: ['Growing Up', 'Life', 'Pressure'],
    category: 'personal'
  },
  {
    number: 'SCROLL IX',
    title: 'SOFTLY, IN PHASES — A NOTE TO YOU AND ME.',
    excerpt: 'A gentle reminder that healing, growth, and becoming do not happen all at once. Some things are meant to unfold quietly, one phase at a time.',
    tags: ['Healing', 'Growth', 'Personal'],
    category: 'personal'
  },
  {
    number: 'SCROLL X',
    title: 'EVENTUALLY, I HAD TO BEGIN.',
    excerpt: 'A reflection on first steps, timing, patience, and learning that beginnings do not need to be perfect to be meaningful.',
    tags: ['Beginnings', 'Growth', 'Letting Go'],
    category: 'personal'
  },
  {
    number: 'SCROLL XI',
    title: 'SOFT GIRL. STRONG SOUL.',
    excerpt: 'For the ones who feel everything deeply and still find a way to carry themselves through the world with strength and softness.',
    tags: ['Personal', 'Emotions', 'Strength'],
    category: 'personal'
  },
  {
    number: 'SCROLL XII',
    title: 'THE CURSE OF FEELING EVERYTHING SO DEEPLY...',
    excerpt: 'What happens when every little thing leaves a mark? A reflection on sensitivity, intensity, and the strange beauty of feeling deeply.',
    tags: ['Feelings', 'Reflection'],
    category: 'personal'
  },
  {
    number: 'SCROLL XIII',
    title: 'IN A WORLD FULL OF NOISE',
    excerpt: 'A quiet reflection on silence, peace, distance from the noise, and finding a small corner of stillness within an increasingly loud world.',
    tags: ['Silence', 'Peace', 'Reflection'],
    category: 'reflection'
  },
];

const Scrolls = ({ onNextPage }) => {
  const [selectedScroll, setSelectedScroll] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredScrolls = SCROLLS_DATA.filter((s) => {
    if (activeCategory === 'ALL') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="manuscript-viewport chamber-scriptorium">
      <div className="scrolls-container realm-chamber-card">

        {/* Sanctuary Header */}
        <div className="chamber-realm-tag">
          <span className="realm-sigil">📜</span>
          <span>SANCTUARY V • THE SCRIPTORIUM ARCHIVES</span>
        </div>

        <ChapterTitle 
          chapter="CHAPTER V" 
          title="THE SCROLLS" 
        />

        {/* Story Intro (Preserved Verbatim) */}
        <article className="story-layer text-center">
          <p className="story-paragraph">
            Code builds the structures of our world, but words give them meaning. 
            These are the manuscripts penned in quiet hours—reflections on emotion, growth, 
            human connection, and the art of understanding what lies beneath the surface.
          </p>
        </article>

        {/* Inscription Divider */}
        <div className="inscription-divider crimson-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        {/* Manuscripts Scriptorium */}
        <section className="scrolls-scriptorium library-sanctum">
          <h2 className="record-heading">THE MANUSCRIPTS OF THE SCRIPTORIUM</h2>

          {/* Interactive Category Filter */}
          <div className="scrolls-filter-bar" role="tablist" aria-label="Scroll Topics">
            <button
              className={`choice-pill ${activeCategory === 'ALL' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ALL')}
            >
              ALL SCROLLS ({SCROLLS_DATA.length})
            </button>
            <button
              className={`choice-pill ${activeCategory === 'reflection' ? 'active' : ''}`}
              onClick={() => setActiveCategory('reflection')}
            >
              REFLECTION & PHILOSOPHY
            </button>
            <button
              className={`choice-pill ${activeCategory === 'psychology' ? 'active' : ''}`}
              onClick={() => setActiveCategory('psychology')}
            >
              PSYCHOLOGY & MINDS
            </button>
            <button
              className={`choice-pill ${activeCategory === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveCategory('personal')}
            >
              GROWTH & SOUL
            </button>
          </div>
          
          <div className="scrolls-grid scriptorium-grid">
            {filteredScrolls.map((scroll, index) => (
              <article
                key={index}
                className="scroll-card gothic-manuscript-card"
                onClick={() => setSelectedScroll(scroll)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedScroll(scroll)}
                aria-label={`Unfurl ${scroll.title}`}
              >
                <div className="scroll-header">
                  <div className="scroll-header-top">
                    <span className="scroll-number">{scroll.number}</span>
                    <span className="unfurl-hint">📜 UNFURL MANUSCRIPT</span>
                  </div>
                  <h3 className="scroll-title">{scroll.title}</h3>
                </div>
                <p className="scroll-excerpt">{scroll.excerpt}</p>
                <div className="scroll-tags">
                  {scroll.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="scroll-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Expanded Scroll Parchment Modal */}
        {selectedScroll && (
          <div
            className="scroll-modal-overlay"
            onClick={() => setSelectedScroll(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedScroll.title}
          >
            <div
              className="scroll-modal-container scriptorium-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="scroll-modal-header">
                <span className="scroll-number">{selectedScroll.number}</span>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedScroll(null)}
                  aria-label="Close Scroll"
                >
                  ✕
                </button>
              </div>

              <h2 className="scroll-modal-title">{selectedScroll.title}</h2>
              
              <div className="scroll-modal-divider crimson-divider">
                <span className="line"></span>
                <span className="diamond">♦</span>
                <span className="line"></span>
              </div>

              <blockquote className="scroll-modal-body">
                "{selectedScroll.excerpt}"
              </blockquote>

              <div className="scroll-tags" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
                {selectedScroll.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="scroll-tag">{tag}</span>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  className="dispatch-link"
                  style={{ cursor: 'pointer', border: 'none', display: 'inline-block' }}
                  onClick={() => setSelectedScroll(null)}
                >
                  ROLL UP MANUSCRIPT
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Button Wrapper */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '40px 0' }}>
          <RedDiamondBtn 
            label="THE ORACLE CHAMBER" 
            onClick={onNextPage} 
          />
        </div>

      </div>
    </div>
  );
};

export default Scrolls;
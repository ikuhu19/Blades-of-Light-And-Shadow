import React from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import Rune from '../components/Rune';

const Scrolls = ({ onNextPage }) => {
  return (
    <div>

      {/* Chapter Header */}
      <ChapterTitle 
        chapter="CHAPTER V" 
        title="THE SCROLLS" 
      />

      {/* Story Intro */}
      <article className="story-layer text-center">
        <p className="story-paragraph">
          Code builds the structures of our world, but words give them meaning. 
          These are the manuscripts penned in quiet hours—reflections on emotion, growth, 
          human connection, and the art of understanding what lies beneath the surface.
        </p>
      </article>

      {/* Inscription Divider */}
      <div className="inscription-divider">
        <span className="line"></span>
        <span className="diamond">♦</span>
        <span className="line"></span>
      </div>

      {/* Manuscripts Scriptorium */}
      <section className="scrolls-scriptorium">
        <h2 className="record-heading">THE MANUSCRIPTS OF THE SCRIPTORIUM</h2>
        
        <div className="scrolls-grid">
          
          {/* Scroll 1 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL I</span>
              <h3 className="scroll-title">WHO ARE YOU?</h3>
            </div>
            <p className="scroll-excerpt">
              A quiet exploration of identity, self-understanding, and the questions 
              that remain when we begin looking beyond the person the world expects us to be.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Identity</span>
              <span className="scroll-tag">Reflection</span>
            </div>
          </article>

          {/* Scroll 2 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL II</span>
              <h3 className="scroll-title">UNDERSTANDING MINDS, COMMUNICATING HEARTS</h3>
            </div>
            <p className="scroll-excerpt">
              Thoughts on understanding the minds of others, communicating beyond words,
              and discovering how empathy shapes the way we connect.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Psychology</span>
              <span className="scroll-tag">Communication</span>
              <span className="scroll-tag">Human Connection</span>
            </div>
          </article>

          {/* Scroll 3 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL III</span>
              <h3 className="scroll-title">LOVE: THE EMOTION WE HYPE, HURT, AND MISUNDERSTAND</h3>
            </div>
            <p className="scroll-excerpt">
              A raw exploration of love, human connection, expectations, and the 
              invisible threads that shape the relationships we choose to hold onto.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Essay</span>
              <span className="scroll-tag">Emotions</span>
              <span className="scroll-tag">Relationships</span>
            </div>
          </article>

          {/* Scroll 4 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL IV</span>
              <h3 className="scroll-title">THE PARADOX OF SATISFACTION</h3>
            </div>
            <p className="scroll-excerpt">
              An observation on desire, contentment, and the strange human habit of 
              reaching for more even after having enough.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Philosophy</span>
              <span className="scroll-tag">Psychology</span>
            </div>
          </article>

          {/* Scroll 5 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL V</span>
              <h3 className="scroll-title">THE ENDOWMENT EFFECT</h3>
            </div>
            <p className="scroll-excerpt">
              A reflection on why we value things differently simply because they 
              become ours, and what that reveals about attachment and human behaviour.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Psychology</span>
              <span className="scroll-tag">Behaviour</span>
            </div>
          </article>

          {/* Scroll 6 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL VI</span>
              <h3 className="scroll-title">SELFISH</h3>
            </div>
            <p className="scroll-excerpt">
              A closer look at selfishness, self-preservation, and the uncomfortable 
              line between choosing yourself and becoming indifferent to others.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Human Nature</span>
              <span className="scroll-tag">Reflection</span>
            </div>
          </article>

          {/* Scroll 7 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL VII</span>
              <h3 className="scroll-title">IS IT REALLY THAT COMPLICATED?</h3>
            </div>
            <p className="scroll-excerpt">
              Sometimes life is complicated. Sometimes we are. A reflection on 
              overthinking, simplicity, and the stories we create inside our own minds.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Life</span>
              <span className="scroll-tag">Reflection</span>
            </div>
          </article>

          {/* Scroll 8 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL VIII</span>
              <h3 className="scroll-title">PRESSURE TO HAVE EVERYTHING FIGURED OUT BY 21...</h3>
            </div>
            <p className="scroll-excerpt">
              A reflection on growing up, uncertainty, expectations, and the pressure 
              to have an entire life mapped out before we have even begun living it.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Growing Up</span>
              <span className="scroll-tag">Life</span>
              <span className="scroll-tag">Pressure</span>
            </div>
          </article>

          {/* Scroll 9 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL IX</span>
              <h3 className="scroll-title">SOFTLY, IN PHASES — A NOTE TO YOU AND ME.</h3>
            </div>
            <p className="scroll-excerpt">
              A gentle reminder that healing, growth, and becoming do not happen all 
              at once. Some things are meant to unfold quietly, one phase at a time.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Healing</span>
              <span className="scroll-tag">Growth</span>
              <span className="scroll-tag">Personal</span>
            </div>
          </article>

          {/* Scroll 10 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL X</span>
              <h3 className="scroll-title">EVENTUALLY, I HAD TO BEGIN.</h3>
            </div>
            <p className="scroll-excerpt">
              A reflection on first steps, timing, patience, and learning that 
              beginnings do not need to be perfect to be meaningful.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Beginnings</span>
              <span className="scroll-tag">Growth</span>
              <span className="scroll-tag">Letting Go</span>
            </div>
          </article>

          {/* Scroll 11 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL XI</span>
              <h3 className="scroll-title">SOFT GIRL. STRONG SOUL.</h3>
            </div>
            <p className="scroll-excerpt">
              For the ones who feel everything deeply and still find a way to 
              carry themselves through the world with strength and softness.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Personal</span>
              <span className="scroll-tag">Emotions</span>
              <span className="scroll-tag">Strength</span>
            </div>
          </article>

          {/* Scroll 12 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL XII</span>
              <h3 className="scroll-title">THE CURSE OF FEELING EVERYTHING SO DEEPLY...</h3>
            </div>
            <p className="scroll-excerpt">
              What happens when every little thing leaves a mark? A reflection 
              on sensitivity, intensity, and the strange beauty of feeling deeply.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Feelings</span>
              <span className="scroll-tag">Reflection</span>
            </div>
          </article>

          {/* Scroll 13 */}
          <article className="scroll-card">
            <div className="scroll-header">
              <span className="scroll-number">SCROLL XIII</span>
              <h3 className="scroll-title">IN A WORLD FULL OF NOISE</h3>
            </div>
            <p className="scroll-excerpt">
              A quiet reflection on silence, peace, distance from the noise, and 
              finding a small corner of stillness within an increasingly loud world.
            </p>
            <div className="scroll-tags">
              <span className="scroll-tag">Silence</span>
              <span className="scroll-tag">Peace</span>
              <span className="scroll-tag">Reflection</span>
            </div>
          </article>

        </div>
      </section>

      {/* Navigation Button Wrapper */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '40px 0' }}>
        <RedDiamondBtn 
          label="THE RAVEN" 
          onClick={onNextPage} 
        />
      </div>

    </div>
  );
};

export default Scrolls;
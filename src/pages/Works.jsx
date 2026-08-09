import React from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';

const Works = ({ onNextPage }) => {
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
  
  <div className="works-grid">
    
    {/* Project 1 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT I</span>
        <h3 className="work-title">pieces-of-kuhu</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
        <span className="rune-tag">CSS</span>
        <span className="rune-tag">Bootstrap</span>
      </div>
    </div>

    {/* Project 2 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT II</span>
        <h3 className="work-title">Chaos-button-game</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
        <span className="rune-tag">CSS</span>
        <span className="rune-tag">JavaScript</span>
      </div>
    </div>

    {/* Project 3 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT III</span>
        <h3 className="work-title">myung-momos</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
        <span className="rune-tag">CSS</span>
        <span className="rune-tag">JavaScript</span>
      </div>
    </div>

    {/* Project 4 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT IV</span>
        <h3 className="work-title">Blades-of-lights-and-shadows</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
        <span className="rune-tag">CSS</span>
        <span className="rune-tag">JavaScript</span>
        <span className="rune-tag">React</span>
      </div>
    </div>

    {/* Project 5 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT V</span>
        <h3 className="work-title">ShelfShare</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
        <span className="rune-tag">CSS</span>
        <span className="rune-tag">JavaScript</span>
        <span className="rune-tag">React</span>
        <span className="rune-tag">Node.js</span>
        <span className="rune-tag">Express</span>
        <span className="rune-tag">MySQL</span>
      </div>
    </div>

    {/* Project 6 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT VI</span>
        <h3 className="work-title">ikuhu19</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">GitHub</span>
        <span className="rune-tag">README</span>
      </div>
    </div>

    {/* Project 7 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT VII</span>
        <h3 className="work-title">DSA_in_CPP</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">C++</span>
        <span className="rune-tag">DSA</span>
      </div>
    </div>

    {/* Project 8 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT VIII</span>
        <h3 className="work-title">DBMS-student-management</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
        <span className="rune-tag">CSS</span>
        <span className="rune-tag">JavaScript</span>
        <span className="rune-tag">MySQL</span>
      </div>
    </div>

    {/* Project 9 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT IX</span>
        <h3 className="work-title">SMS-java</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">Java</span>
      </div>
    </div>

    {/* Project 10 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT X</span>
        <h3 className="work-title">java-basic-programs</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">Java</span>
      </div>
    </div>

    {/* Project 11 */}
    <div className="work-card">
      <div className="work-header">
        <span className="work-number">ARTIFACT XI</span>
        <h3 className="work-title">blog-formatter</h3>
      </div>
      <div className="work-runes">
        <span className="rune-tag">HTML</span>
      </div>
    </div>

  </div>
</section>
         

      </main>

      {/* Navigation Button */}
      <RedDiamondBtn 
        label="THE SCROLLS" 
        onClick={onNextPage} 
      />
    </div>
  );
};

export default Works;
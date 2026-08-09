import React from 'react';
import RedDiamondBtn from '../components/RedDiamondBtn';
import ChapterTitle from '../components/ChapterTitle';
import Rune from '../components/Rune';

const Craft = ({ onNextPage }) => {
  return (
    <div className="manuscript-viewport">
      <main className="craft-container">
        
        <ChapterTitle chapter="CHAPTER III" title="THE CRAFT" />

        <article className="story-layer text-center">
          <p className="story-paragraph">
            The weapons of a wanderer are many; mine happen to be made of logic. 
            To navigate the wild realms of technology, one must know which artifact to wield—and 
            have the patience to forge new ones when the <Rune secret="Debugging legacy code...">old ways fail</Rune>.
          </p>
        </article>

        <div className="inscription-divider">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        <section className="craft-arsenal">
          <h2 className="record-heading">THE ARSENAL OF ARTIFACTS</h2>
          
          <div className="arsenal-grid">
            <div className="arsenal-card">
              <h3 className="arsenal-category">RUNES OF COMMAND</h3>
              <p className="arsenal-subtitle">Programming Languages</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span>C/C++</li>
                <li><span className="bullet">♦</span>Javascript</li>
                <li><span className="bullet">♦</span>SQL</li>
              </ul>
            </div>

            <div className="arsenal-card">
              <h3 className="arsenal-category">THE ARCHITECT'S TOOLS</h3>
              <p className="arsenal-subtitle">Web & Frameworks</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span> React</li>
                <li><span className="bullet">♦</span> HTML5 & CSS3</li>
                <li><span className="bullet">♦</span> Node.js</li>
              </ul>
            </div>

            <div className="arsenal-card">
              <h3 className="arsenal-category">THE VAULT & SANCTUM</h3>
              <p className="arsenal-subtitle">Databases & Systems</p>
              <ul className="artifact-list">
                <li><span className="bullet">♦</span> MySQL</li>
                <li><span className="bullet">♦</span> Relational Database Design</li>
                <li><span className="bullet">♦</span> Query Optimization</li>
              </ul>
            </div>

            <div className="arsenal-card">
              <h3 className="arsenal-category">THE FORGE DISCIPLINE</h3>
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

      <RedDiamondBtn label="THE WORKS" onClick={onNextPage} />
    </div>
  );
};

export default Craft;
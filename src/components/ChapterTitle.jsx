import React from 'react';

const ChapterTitle = ({ chapter, title }) => (
  <header className="text-center">
    <div className="chapter-header">{chapter}</div>
    <h1 className="main-title">{title}</h1>
  </header>
);

export default ChapterTitle;
import React from 'react'

export default function ChapterCard({ title, category, description, tags, links }) {
  return (
    <div className="chapter-card">
      <div className="card-header">
        {category && <span className="card-category">{category}</span>}
        <h3 className="card-title">{title}</h3>
      </div>
      {description && <p className="card-description">{description}</p>}
      
      {tags && tags.length > 0 && (
        <div className="card-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag-badge">{tag}</span>
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="card-links">
          {links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="card-link-btn">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
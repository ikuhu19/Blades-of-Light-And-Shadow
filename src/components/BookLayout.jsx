import React from 'react'
import Navigation from './Navigation'

export default function BookLayout({ children }) {
  return (
    <div className="book-viewport">
      <div className="book-container">
        <Navigation />
        <main className="book-page">
          {children}
        </main>
        <footer className="book-footer">
          <div className="gold-divider">❖</div>
          <p className="footer-credits">
            Chronicle of Maanyta Katare • Blades of Light & Shadow
          </p>
        </footer>
      </div>
    </div>
  )
}